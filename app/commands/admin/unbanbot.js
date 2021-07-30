const Base = require('../../../util/class/Command')
const tempBan = require('../../../util/functions/tempBan')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'unbanbot'
        this.uses = [
            ['Desbanear usuario', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user>`')

            const admin = await this.db.trainer.findOne({ where: { user: message.author.id } })
            if(!admin || admin.rank == null || admin.rak == 1) return message.reply('no tienes permiso para ejecutar este comando.')

            const mencion = message.mentions.members.first()
            const id = mencion ? mencion.id : args[0]
            const user = await this.db.trainer.findOne({ where: { user: id }, attributes: ['id', 'name', 'rank', 'ban'] })
            if(!user) return message.reply('este usuario no está registrado como entrenador pokémon.')
            if(!user.ban) return message.reply('este usuario no estaba baneado.')
            
            await this.db.trainer.update({ ban: false }, { where: { id: user.id } })

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Usuario desbaneado!',
                description: message.author.tag + ' ha desbaneado a ' + user.name + '.',
                footer: 'ID del usuario desbaneado: ' + id,
                timestamp: true,
                channel: this.client.config.logs.public,
            }
            this.sendEmbed(message, embed)

            delete embed.channel
            this.sendEmbed(message, embed)

            return await tempBan.load(this.db)
        }
    }
}

module.exports = Command