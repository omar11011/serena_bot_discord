const Base = require('../../../util/class/Command')
const moment = require('moment')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'server'
        this.alias = ['servidor']
        this.description = 'Obtén información detallada del servidor.'
        this.uses = [
            ['Información del servidor', ''],
            ['Imagen del servidor', 'icon'],
            ['Roles del servidor', 'roles'],
        ]

        this.exec = async (message, args, server) => {
            const guild = message.guild
            const embed = {  }

            if(!args[0]) {
                embed.author = [guild.name, guild.iconURL()]
                embed.title = `ID: ${guild.id}`
                embed.thumbnail = guild.iconURL()
                embed.fields = [
                    { name: 'Nivel de verificación', value: this.capitalize(guild.verificationLevel), inline: true },
                    { name: 'Región', value: this.capitalize(guild.region), inline: true },
                    { name: 'Miembros', value: guild.memberCount, inline: true },
                    { name: 'Canales', value: `Categorías: ${this.getChannel(guild, 'category').length}\nTexto: ${this.getChannel(guild, 'text').length}\nVoz: ${this.getChannel(guild, 'voice').length}` },
                    { name: 'Propietario', value: `${message.guild.members.cache.get(guild.ownerID).user.tag} [${guild.ownerID}]` },
                    { name: 'Creación', value: moment(guild.joinedTimestamp).format('LLL') },
                    { name: 'Roles', value: 'Para ver la lista de roles utiliza `' + await server.getPrefix() + 'server roles`' },
                ]
            } else {
                const option = args[0].toLowerCase()

                if(option == 'icon') {
                    embed.title = guild.name
                    embed.image = guild.iconURL({ dynamic: true, size: 2048 })
                }
                else if(option == 'roles') {
                    const roles = this.getRoles(guild)

                    embed.title = `Roles [${roles.length}]`
                    embed.description = roles.join(", ")
                    embed.footer = 'Los roles se ordenan de mayor a menor jerarquía.'
                }
                else return
            }

            return this.sendEmbed(message, embed)
        }

        this.getChannel = (guild, category) => {
            const result = []

            guild.channels.cache.map(e => {
                if(e.type == category) result.push({ id: e.id, name: e.name })
            })

            return result
        }

        this.getRoles = guild => {
            const result = []

            guild.roles.cache.map(e => {
                if(e.name != '@everyone') result.push(`<@&${e.id}>`)
            })

            return result
        }
    }
}

module.exports = Command