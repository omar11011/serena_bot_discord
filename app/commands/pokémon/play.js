const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'play'
        this.cooldown = 30
        this.description = 'Juega con tu pokémon para fortalecer el lazo de amistad entre ustedes dos.'
        this.uses = [
            ['Jugar con tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'pokemon', 'name', 'friendship'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.reply('no tienes seleccionado a ningún pokémon.')

            const limit = 255
            if(pokemon.friendship > limit) pokemon.friendship = 70
            if(pokemon.friendship == limit) return message.reply(pokemon.pokemon + ' ya está al tope de amistad.')

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

            return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: pokemon.pokemon + ' se ha divertido jugando contigo, la amistad entre ustedes se ha incrementado en +1 punto.' })
        }
    }
}

module.exports = Command