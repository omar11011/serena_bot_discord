const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'buy'
        this.alias = ['comprar']
        this.description = 'Compra objetos, recuerda que no podrás comprar si te encuentras dentro de un combate.'
        this.uses = [
            ['Comprar item', '<item> [cantidad]'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <item>`')

            const duel = new this.duel.base(message, message.author.id)
            const inDuel = await duel.get()
            if(inDuel) return message.reply('debes terminar tu duelo pendiente.')
            else duel.delete()

            const cart = { name: [], amount: 1 }
            for(let i = 0; i < args.length; i++) {
                if(isNaN(args[i])) cart.name.push(args[i])
                else {
                    if(parseInt(args[i]) > 0) cart.amount = parseInt(args[i])
                }
            }

            const item = this.item.get(cart.name.join(" "))
            if(!item) return message.channel.send('❌ Este ítem no existe o lo escribiste mal.')
            if(!item.accesible) return message.channel.send('❌ Este ítem no está a la venta.')

            const trade = new this.trade(message.author.id)
            const inTrade = await trade.inTrade()

            if(inTrade) return message.reply('no puedes ejecutar este comando durante un intercambio.')
            else trade.end()

            const user = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!user) return message.channel.send('❌ Aún no te has registrado como entrenador pokémon.')

            const discount = item.metodo == 'Pokecuartos' ? this.client.config.offert.shop_money : this.client.config.offert.shop_gem
            item.precio = Math.ceil(item.precio * (1 - (discount / 100)))
            
            if(item.metodo == 'Pokecuartos') user.money -= (item.precio * cart.amount)
            else user.gems -= (item.precio * cart.amount)

            const embed = {  }

            if(user.gems < 0 || user.money < 0) {
                embed.color = 'RED'
                embed.author = ['Compra fallida', message.author.avatarURL()]
                embed.description = 'No tienes ' + (user.gems < 0 ? 'gemas suficientes' : 'dinero suficiente') + ' para comprar este artículo.'
                embed.footer = 'Usa los comandos de economía para poder ganar algo más de dinero.'
            } else {
                const inventory = await this.db.inventory.findOne({ where: { item: item.nombre, trainerId: user.trainerId } })

                if(inventory) await this.db.inventory.increment({ amount: +cart.amount }, { where: { id: inventory.id } })
                else await this.db.inventory.create({ item: item.nombre, amount: cart.amount, uses: item.uses, trainerId: user.trainerId })

                await this.db.balance.update({ money: user.money, gems: user.gems }, { where: { id: user.id } })

                embed.color = '#16A167'
                embed.author = ['¡Compra exitosa!', message.author.avatarURL()]
                embed.description = 'Has comprado (x' + cart.amount + ') ' + item.nombre + ' ' + item.emoji
                embed.timestamp = true
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command