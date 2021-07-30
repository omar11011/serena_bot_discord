const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'evolves'
        this.alias = ['evolve', 'evoluciones', 'evolucion', 'evolución']
        this.description = 'Obtén información de todas las evoluciones o transformaciones de un pokémon.'
        this.uses = [
            ['Evoluciones de un pokémon', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <pokémon>`')

            let pokemon
            if(!isNaN(args[0])) pokemon = this.pokemon.getByID(parseInt(args[0]))
            else pokemon = this.pokemon.get(args.join(" "))

            if(!pokemon) return message.channel.send('❌ Este pokémon no existe.')
            if(pokemon.evolucion.length < 1) return message.channel.send('❌ ' + pokemon.pokemon + ' no tiene evoluciones.')

            const evolves = []
            pokemon.evolucion.map(e => {
                evolves.push(e.message())
            })

            const embed = {
                data: evolves,
                nameList: 'Puede evolucionar de las siguientes formas:',
                function: e => {
                    return e
                },
                color: pokemon.color.hexadecimal,
                author: pokemon.pokemon + ' #' + pokemon.id,
                footer: 'Información requerida por: ' + message.author.tag,
            }

            return this.sendPagination(message, embed)
        }
    }
}

module.exports = Command