const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'unequip'
        this.alias = ['desequipar']
        this.cooldown = 5
        this.description = 'Retírale el objeto que tu pokémon tenga equipado.'
        this.uses = [
            ['Desequipar un objeto', ''],
        ]

        this.exec = async (message, args, server) => {
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id } } ], attributes: ['id', 'pokemon', 'object', 'trainerId'] })
            if(!pokemon) return message.channel.send('❌ No tienes ningún pokémon seleccionado.')
            if(pokemon.object == null) return message.reply(pokemon.pokemon + ' no tiene ningún objeto equipado.')

            await this.db.pokemon.update({ object: null }, { where: { id: pokemon.id } })

            const item = this.item.get(pokemon.object)
            if(!item.gastable) {
                const inv = await this.db.inventory.findOne({ where: { item: pokemon.object, trainerId: pokemon.trainerId } })

                if(inv) await this.db.inventory.increment({ amount: +1 }, { where: { id: inv.id } })
                else await this.db.inventory.create({ item: pokemon.object, amount: 1, uses: 1, trainerId: pokemon.trainerId })
            }

            return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: pokemon.pokemon + ' ha desequipado ' + item.nombre + '.' })
        }
    }
}

module.exports = Command