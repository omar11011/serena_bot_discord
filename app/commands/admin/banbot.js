const Base = require('../../../util/class/Command')
const tempBan = require('../../../util/functions/tempBan')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'banbot'
        this.uses = [
            ['Banear por mención', '<@usuario>'],
            ['Banear por ID de Discord', '<userId>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user>`')

            const admin = await this.db.trainer.findOne({ where: { user: message.author.id } })
            if(!admin || admin.rank == null || admin.rank == 1) return message.reply('no tienes permiso para ejecutar este comando.')

            const mencion = message.mentions.members.first()
            const id = mencion ? mencion.id : args[0]
            if(id == message.author.id) return message.react('❌')

            const user = await this.db.trainer.findOne({ where: { user: id }, attributes: ['id', 'name', 'rank', 'ban'] })
            if(!user) return message.reply('este usuario no está registrado como entrenador pokémon.')
            if(user.ban) return message.reply('este usuario ya se encuentra baneado.')
            if(user.rank != null) {
                if(user.rank == admin.rank) return message.reply('no puedes banear a un usuario de tu mismo rango.')
                if(user.rank > admin.rank) return message.reply('no puedes banear a un superior.')
            }
            
            await this.db.trainer.update({ rank: null, ban: true }, { where: { id: user.id } })

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Usuario baneado!',
                description: message.author.tag + ' ha baneado temporalmente a ' + user.name + '. Este usuario no podrá usar ningún comando temporalmente hasta que apele a su ban.',
                footer: 'ID del usuario baneado: ' + id,
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