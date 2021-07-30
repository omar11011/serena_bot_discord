const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'unverify'
        this.cooldown = 5
        this.uses = [
            ['Retirar la verificación del servidor actual', ''],
            ['Retirar la verificación de un servidor', '<guildId>'],
        ]

        this.exec = async (message, args, server) => {
            const guild = args[0] ? args[0] : message.guild.id
            const user = await this.db.trainer.findOne({ where: { user: message.author.id }, attributes: ['rank'] })
            if(!user || user.rank == null) return
            if(user.rank === 1) return message.reply('no tienes permiso para utilizar este comando.')

            const breed = new this.breed(guild, message.author.id)
            const result = await breed.verify(false)
            if(!result) return message.reply('este servidor no estaba verificado para la crianza.')

            message.react('☑️')

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Servidor retirado!',
                description: message.author.tag + ' ha retirado la verificación del servidor `' + (args[0] ? 'ID: ' + args[0] : message.guild.name) +'`, la crianza ya no está habilitada aquí.',
                channel: this.client.config.logs.public,
                timestamp: true,
            }

            breed.folderServer.eliminar(breed.server)

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command