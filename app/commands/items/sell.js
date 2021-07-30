const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'sell'
        this.alias = ['vender']
        this.cooldown = 5
        this.description = 'Vende objetos, estos deben ser vendibles, mira la información de cada uno para que te asegures que puedan ser vendidos.'
        this.uses = [
            ['Vender objetos', '<item> [cantidad]'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <item> <cantidad>`')

            const data = { item: [], amount: 1 }
            for(let i = 0; i < args.length; i++) {
                if(isNaN(args[i])) data.item.push(args[i])
                else {
                    const number = parseInt(args[i])
                    if(number > 1) data.amount = number
                }
            }

            const item = this.item.get(data.item.join(" "))
            if(!item) return message.channel.send('❌ Este item no existe o lo escribiste mal.')
            if(!item.vendible) return message.channel.send('❌ Este item no puede venderse.')

            const inv = await this.db.inventory.findOne({ where: { item: item.nombre }, include: [ { model: this.db.trainer, as: 'trainer', attributes: [], where: { user: message.author.id } } ] })
            if(!inv) return message.reply('no tienes ' + item.nombre + ' en tu inventario.')
            if(inv.amount < data.amount) return message.reply('no tienes suficientes unidades de ' + item.nombre + ' en tu inventario.')

            const money = data.amount * item.precio
            inv.amount -= data.amount

            if(inv.amount == 0) await this.db.inventory.destroy({ where: { id: inv.id } })
            else await this.db.inventory.increment({ amount: -data.amount }, { where: { id: inv.id } })

            await this.db.balance.increment({ money: +money }, { where: { trainerId: inv.trainerId } })

            return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], description: 'Has vendido (x' + data.amount + ') ' + item.nombre + ', tu recompensa es de ' + money + ' pokécuartos.' })
        }
    }
}

module.exports = Command