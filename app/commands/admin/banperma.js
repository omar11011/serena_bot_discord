const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'banperma'
        this.alias = ['permaban']
        this.ownerOnly = true
        this.uses = [
            ['Banear por mención', '<@usuario>'],
            ['Banear por ID de Discord', '<userId>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.react('❓')

            const mencion = message.mentions.members.first()
            const id = mencion ? mencion.id : args[0]
            const user = await this.db.trainer.findOne({ where: { user: id }, attributes: ['id', 'name'] })
            if(!user) return message.reply('este usuario no está registrado como entrenador pokémon.')

            const models = ['background', 'inventory', 'medal', 'pin', 'pokedex', 'pokemon']
            for(let i = 0; i < models.length; i++) await this.db[models[i]].destroy({ where: { trainerId: user.id } })

            await this.db.balance.update({ money: 0 }, { where: { trainerId: user.id } })

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Usuario baneado permanentemente!',
                description: message.author.tag + ' ha baneado permanentemente a ' + user.name + '. Todos sus datos han sido borrados.',
                footer: 'ID del usuario baneado: ' + id,
                timestamp: true,
                channel: this.client.config.logs.public,
            }
            this.sendEmbed(message, embed)

            delete embed.channel
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command