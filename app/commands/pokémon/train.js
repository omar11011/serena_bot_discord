const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'train'
        this.alias = ['entrenar']
        this.cooldown = 15
        this.description = 'Entrena con tu pokémon para que pueda ganar experiencia.'
        this.uses = [
            ['Entrenar a tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const duel = new this.duel.base(message, message.author.id)
            const inDuel = await duel.get()
            if(inDuel) return message.reply('tu pokémon se encuentra dentro de un duelo actualmente.')
            else duel.delete()

            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'pokemon', 'name', 'xp', 'level', 'gender'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.reply('no tienes ningún pokémon seleccionado.')

            const xp = 10 + Math.floor(Math.random() * 6)
            const data = this.pokemon.get(pokemon.pokemon)
            const needExp = data.needExp(pokemon.level)
            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: data.pokemon + ' ha conseguido `' + xp + '` puntos de experiencia.',
            }

            pokemon.xp += xp
            if(pokemon.xp >= needExp) {
                pokemon.level++
                pokemon.xp -= needExp
                embed.description += '\nEl nivel de tu pokémon ha subido al `' + pokemon.level + '`.'
            }

            const evolve = data.getEvolveLevel(pokemon.level, pokemon.gender)
            if(evolve) {
                if(pokemon.name == pokemon.pokemon) pokemon.name = evolve
                embed.footer = pokemon.pokemon + ' ha evolucionado en ' + evolve + '.'
                pokemon.pokemon = evolve
            }

            await this.db.pokemon.update({ pokemon: pokemon.pokemon, name: pokemon.name, xp: pokemon.xp, level: pokemon.level }, { where: { id: pokemon.id } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command