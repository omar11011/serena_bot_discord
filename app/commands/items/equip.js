const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'equip'
        this.alias = ['equipar']
        this.cooldown = 5
        this.description = 'Tu pokémon equipará el objeto que le estás dando, pero este debe ser equipable.'
        this.uses = [
            ['Equipar un objeto', '<item>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <item>`')

            const item = this.item.get(args.join(" "))
            if(!item) return message.channel.send('❌ Este item no existe.')
            if(!item.equipable) return message.reply('no es posible equipar este item.')

            const inventory = await this.db.inventory.findOne({ where: { item: item.nombre }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!inventory) return message.reply('no tienes este item en tu inventario.')

            const pokemon = await this.db.pokemon.findOne({ where: { select: true, trainerId: inventory.trainerId }, attributes: ['id', 'pokemon', 'object'] })
            if(!pokemon) return message.channel.send('❌ No tienes ningún pokémon seleccionado.')

            await this.db.pokemon.update({ object: item.nombre }, { where: { id: pokemon.id } })

            inventory.amount -= 1

            if(inventory.amount == 0) await this.db.inventory.destroy({ where: { id: inventory.id } })
            else await this.db.inventory.increment({ amount: -1 }, { where: { id: inventory.id } })

            if(pokemon.object != null) {
                const lastestItem = this.item.get(pokemon.object)
                if(!lastestItem.gastable) {
                    const inv = await this.db.inventory.findOne({ where: { item: pokemon.object, trainerId: inventory.trainerId } })

                    if(inv) await this.db.inventory.increment({ amount: +1 }, { where: { id: inv.id } })
                    else await this.db.inventory.create({ item: pokemon.object, amount: 1, uses: 1, trainerId: inventory.trainerId })
                }
            }

            return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: pokemon.pokemon + ' ha equipado ' + item.nombre + '.' })
        }
    }
}

module.exports = Command