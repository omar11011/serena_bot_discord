const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'food'
        this.cooldown = 60
        this.description = 'Dale de comer a tu pokémon para fortalecer el lazo de amistad entre ustedes dos.'
        this.uses = [
            ['Alimentar a tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'pokemon', 'name', 'friendship', 'trainerId'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.reply('no tienes seleccionado a ningún pokémon.')

            const limit = 255
            if(pokemon.friendship > limit) pokemon.friendship = 70
            if(pokemon.friendship == limit) return message.reply(pokemon.pokemon + ' ya está al tope de amistad.')

            const items = this.item.getItemOfCategory('Comida')
            const allItems = []

            for(let i = 0; i < items.length; i++) allItems.push(items[i].nombre)

            const inv = await this.db.inventory.findOne({ where: { item: { [Op.in]: allItems }, trainerId: pokemon.trainerId  } })
            if(!inv) return message.reply('no tienes comida en tu inventario.')

            pokemon.friendship += 1
            pokemon.form = pokemon.pokemon

            const data = this.pokemon.get(pokemon.pokemon)
            data.evolucion.map(e => {
                if(e.tipo == 'Amistad' && pokemon.friendship >= e.amistad) {
                    if(e.day == null) pokemon.pokemon = e.evolucion
                    else {
                        const date = new Date()
                        const hours = date.getHours()

                        if(e.day && hours >= 6 && hours < 18) pokemon.pokemon = e.evolucion
                        if(!e.day && (hours < 6 || hours >= 18)) pokemon.pokemon = e.evolucion
                    }

                    if(pokemon.form != pokemon.pokemon) {
                        if(pokemon.form == pokemon.name) pokemon.name = e.evolucion
                    }
                }
            })

            await this.db.pokemon.update({ pokemon: pokemon.pokemon, name: pokemon.name, friendship: pokemon.friendship }, { where: { id: pokemon.id } })

            inv.amount -= 1
            if(inv.amount == 0) await this.db.inventory.destroy({ where: { id: inv.id } })
            else await this.db.inventory.increment({ amount: -1 }, { where: { id: inv.id } })

            return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: pokemon.pokemon + ' se siente mejor después de comer un ' + inv.item + ', la amistad entre ustedes se ha incrementado en +1 punto.' })
        }
    }
}

module.exports = Command