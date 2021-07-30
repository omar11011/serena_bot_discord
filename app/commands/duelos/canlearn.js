const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'canlearn'
        this.description = 'Obtén información sobre qué pokémon pueden usar alguna máquina o si es que algún pokémon en particular puede usarla.'
        this.uses = [
            ['Pokémon que pueden usar una máquina', '<máquina>'],
            ['Comprobar si un pokémon puede usar una máquina', '<máquina> <pokémon>']
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Debes ingresar el nombre de una MT, MO o DT.')

            const machine = this.item.get(args[0])
            if(!machine) return message.channel.send('❌ Este item no existe.')
            if(machine.categoria != 'Máquina') return message.channel.send('❌ Este comando sólo funciona con máquinas.')

            const embed = { author: machine.move + ' (' + machine.nombre + ')' }
            args.splice(0, 1)

            if(!args[0]) {
                embed.data = this.findForms(machine.pokemon)
                embed.elements = 15
                embed.nameList = 'Pokémon'
                embed.function = e => {
                    return e
                }
                embed.description = 'Los siguientes pokémon pueden aprender este movimiento ='
                embed.footer = 'Información solicitada por el usuario: ' + message.author.tag + '\nResultados de la búsqueda: ' + embed.data.length

                return this.sendPagination(message, embed)
            } else {
                const pokemon = this.pokemon.get(args.join(" "))
                if(!pokemon) return message.channel.send('❌ Este pokémon no existe.')

                embed.color = machine.pokemon.includes(pokemon.id) ? '#16A167': 'RED'
                embed.description = pokemon.pokemon + ' ' + (machine.pokemon.includes(pokemon.id) ? '' : 'no') + ' puede aprender este movimiento con esta máquina.'
                embed.footer = message.author.tag

                return this.sendEmbed(message, embed)
            }
        }

        this.findForms = content => {
            const result = []

            for(let i = 0; i < content.length; i++) {
                this.pokemon.data.map(e => {
                    if(e.id == content[i]) {
                        const nameArray = e.pokemon.split(" ")
                        if(!nameArray.includes('Mega') && !nameArray.includes('Gigamax')) result.push(e.pokemon)
                    }
                })
            }

            return result
        }
    }
}

module.exports = Command