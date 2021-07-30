const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'enable'
        this.alias = ['habilitar']
        this.description = 'Habilita comandos que estaban restringidos en ciertos canales.'
        this.userPermissions = ['ADMINISTRATOR']
        this.uses = [
            ['Habilitar un comando en el canal actual', '<comando>'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <comando>`')

            const command = this.client.commands.filter(e => {
                return e.nombre == args[0].toLowerCase() || e.alias.includes(args[0].toLowerCase())
            })
            if(command.length < 1) return message.channel.send('❌ Este comando no existe.')

            const hasBlock = await server.commandBlockInChannel(message.channel.id, command[0].nombre)
            if(!hasBlock) return message.reply('este comando no estaba deshabilitado en este canal.')

            await server.enableCommandInChannel(message.channel.id, command[0].nombre)

            return this.sendEmbed(message, { color: '#16A167', author: 'Comando activado', description: 'Se ha activado el comando `' + command[0].nombre + '` en este canal.', footer: [message.author.tag, message.author.avatarURL()] })
        }
    }
}

module.exports = Command