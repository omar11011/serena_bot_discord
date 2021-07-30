const Base = require('../../../util/class/Command')
const Tipo = require('../../../data/Tipo')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'weak'
        this.description = 'Obtén información de las debilidades de algún pokémon.'
        this.uses = [
            ['Debilidades de un pokémon', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Debes ingresar el nombre de un pokémon.')

            const pokemon = this.pokemon.get(args.join(" "))
            if(!pokemon) return message.channel.send('❌ Este pokémon no existe.')
            
            const embed = {
                color: pokemon.color.hexadecimal,
                author: 'Debilidades de ' + pokemon.pokemon,
                fields: [],
                footer: 'Información solicitada por el usuario: ' + message.author.tag,
            }
            const types = Object.keys(Tipo)

            for(let i = 0; i < types.length; i++) embed.fields.push({ name: types[i], value: 'x' + pokemon.debilidad(types[i]), inline: true })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command