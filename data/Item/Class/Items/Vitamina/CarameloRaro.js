const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Caramelo Raro'
        this.nombre = 'Caramelo Raro'
        this.precio = 15000
        // this.accesible = false
        this.emoji = '<:rare_candy:732404938705076305>'
        this.descripcion = 'Aumenta el nivel de tu Pokémon en uno.'

        this.exec = async object => {
            const result = { error: false, canEvolve: false, evolves: [] }

            if(object.pokemon.level == 200) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' ha alcanzado el nivel máximo.'
            } else {
                object.pokemon.level += object.amount

                if(object.pokemon.level > 200) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.level - 200)) + ' caramelos.'
                } else {
                    result.embed = { description: object.pokemon.name + ' ha alcanzado el nivel ' + object.pokemon.level + '.' }

                    object.dataPokemon.evolucion.map(e => {
                        if(e.tipo == 'Nivel' && object.pokemon.level >= e.nivel) {
                            if(e.hembra == null) result.canEvolve = true, result.evolves.push(e.evolucion)
                            else {
                                if((e.hembra && object.pokemon.gender == 'Hembra') || (!e.hembra && object.pokemon.gender == 'Macho')) result.canEvolve = true, result.evolves.push(e.evolucion)
                            }
                        }
                    })

                    if(result.canEvolve) {
                        result.evolves = result.evolves[Math.floor(Math.random() * result.evolves.length)]
                        result.embed.footer = 'Tu pokémon ha evolucionado en ' + result.evolves + '.'

                        if(object.pokemon.pokemon == object.pokemon.name) object.pokemon.name = result.evolves
                        object.pokemon.pokemon = result.evolves
                    }

                    delete result.canEvolve
                    delete result.evolves

                    await db.pokemon.update({ pokemon: object.pokemon.pokemon, name: object.pokemon.name, level: object.pokemon.level }, { where: { id: object.pokemon.id } })
                }
            }

            return result
        }
    }
}

module.exports = new Item()