const megadb = require('megadb')

const Spawn = require('./Spawn')

class Servidor {

    constructor(server) {
        this.server = server
        this.folder = new megadb.crearDB(server, 'server/')

        this.prefix = 's!'
        this.channels = {
            log: null,
            welcome: null,
            spawn: [],
        }
        this.welcome = {
            description: 'Esperamos que disfrutes tu estadía en nuestro servidor.',
            footer: null,
            timestamp: true,
            theme: 'black',
        }
        this.perma = {
            mute: [],
            ban: [],
        }

        this.create = () => {
            this.folder.establecer('boost', 1)
            this.folder.establecer('prefix', this.prefix)
            this.folder.establecer('channels', this.channels)
            this.folder.establecer('perma', this.perma)
            this.folder.establecer('ignore', [])
            this.folder.establecer('welcome', this.welcome)
        }
        this.delete = () => {
            this.folder.eliminar('boost')
            this.folder.eliminar('prefix')
            this.folder.eliminar('channels')
            this.folder.eliminar('perma')
            this.folder.eliminar('ignore')
            this.folder.eliminar('welcome')
        }
        
        this.getPrefix = async () => {
            let data = await this.folder.obtener('prefix') || this.prefix
            return data
        }
        this.setPrefix = newPrefix => {
            this.folder.establecer('prefix', newPrefix)
        }

        this.getTypeChannel = async (type, all = false) => {
            let data = await this.folder.obtener('channels') || {  }
            
            if(!data[type] && ['true', 'false'].includes(type)) {
                if(['spawn'].includes(type)) data[type] = []
                else data[type] = false
            }

            if(!data.welcome) data.welcome = this.channels.welcome
            if(!data.log) data.log = this.channels.log
            if(!data.spawn) data.spawn = this.channels.spawn
            
            if(all) return data

            return data[type]
        }
        this.setTypeChannel = async (type, channel) => {
            const data = await this.getTypeChannel(type, true)

            if(Array.isArray(data[type])) data[type].push(channel)
            else data[type] = channel

            this.folder.establecer('channels', data)
        }

        this.getDataWelcome = async () => {
            let data = await this.folder.obtener('welcome') || this.welcome
            return data
        }

        this.getBoost = async () => {
            let data = await this.folder.obtener('boost')
            if(!data && typeof data != 'number') data = 1
            return data
        }

        this.getAFK = async () => {
            const data = await this.folder.obtener('afk') || []
            return data
        }
        this.findUserAFK = async user => {
            let exist = false
            let data = await this.getAFK()

            data.map(e => {
                if(e.user == user) exist = data
            })

            return exist
        }
        this.addUserAFK = async object => {
            let exist = await this.findUserAFK(object.user)

            if(exist) return false
            else exist = []

            exist.push({ user: object.user, msg: object.msg })
            this.folder.establecer('afk', exist)

            return true
        }
        this.removeUserAFK = async user => {
            let exist = await this.findUserAFK(user)
            if(!exist) return false

            exist = exist.filter(e => {
                return e.user != user
            })
            this.folder.establecer('afk', exist)

            return true
        }

        this.getAllChannelsBlock = async () => {
            const data = await this.folder.obtener('ignore') || []
            return data
        }
        this.commandBlockInChannel = async (channel, command) => {
            let block = false
            let data = await this.getAllChannelsBlock()

            data.map(e => {
                if(e.channel == channel && e.commands.includes(command)) block = true
            })

            return block
        }
        this.blockCommandInChannel = async (channel, command) => {
            let numberObject = null
            let data = await this.getAllChannelsBlock()

            for(let i = 0; i < data.length; i++) {
                if(data[i].channel == channel) numberObject = i
            }

            if(numberObject == null) {
                data.push({ channel: channel, commands: [command] })
            } else {
                if(!data[numberObject].commands.includes(command)) data[numberObject].commands.push(command)
            }

            return this.folder.establecer('ignore', data)
        }
        this.enableCommandInChannel = async (channel, command) => {
            let numberDelete = null
            let data = await this.getAllChannelsBlock()

            for(let i = 0; i < data.length; i++) {
                if(data[i].channel == channel) {
                    data[i].commands = data[i].commands.filter(f => { return f != command })
                    if(data[i].commands.length < 1) numberDelete = i
                }
            }

            if(numberDelete != null) data.splice(numberDelete, 1)

            return this.folder.establecer('ignore', data)
        }
        
        this.getUsersPerma = async () => {
            const data = await this.folder.obtener('perma') || this.perma
            return data
        }

        this.sendSpawn = async (message, guild) => {
            let data = await this.folder.obtener('count-spawn') || 0

            data ++
            if(data >= 25) {
                data = 0
                
                const spawn = new Spawn(message, guild, await this.getPrefix())
                const channels = await this.getTypeChannel('spawn')
                
                if(channels) for(let i = 0; i < channels.length; i++) spawn.create(channels[i])
            }
            
            this.folder.establecer('count-spawn', data)
        }
    }

}

module.exports = Servidor