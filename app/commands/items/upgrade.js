const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'upgrade'
        this.alias = ['mejorar']
        this.cooldown = 5
        this.description = 'Mejora tu incubadora.'
        this.uses = [
            ['Mejorar la incubadora', 'breed'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const price = { breed: 300 }
            const limit = { breed: 3 }
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre +' <categoría>`')

            const option = args[0].toLowerCase()
            if(!Object.keys(price).includes(option)) return message.react('❓')

            const balance = await this.db.balance.findOne({ attributes: ['id', 'gems'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: ['id', 'breed'] } ] })
            if(!balance) return message.reply('no estás registrado como entrenador pokémon.')

            price[option] *= balance.trainer[option]
            if(balance.gems < price[option]) return message.reply('no tienes suficientes gemas para esta opción, su costo es de ' + price[option] + ' gemas.')
            if(balance.trainer[option] == limit[option]) return message.reply('ya tienes el nivel máximo en la categoría `' + option + '`.')

            if(option == 'breed') await this.db.trainer.increment({ breed: +1 }, { where: { id: balance.trainer.id } })

            await this.db.balance.increment({ gems: -price[option] }, { where: { id: balance.id } })

            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: '¡Has aumentado tu nivel en la categoría ' + option + '!',
                fields: [
                    { name: 'Factura', value: price[option], inline: true },
                    { name: 'Categoría', value: this.capitalize(option), inline: true },
                ],
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command