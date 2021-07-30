class Pokemon {
    constructor() {
        this.data = require('../data/Pokemon')

        this.get = nombre => {
            nombre = nombre.trim().toLowerCase()
            let result = false
            this.data.map(e => {
                if(nombre == e.pokemon.toLowerCase()) result = e
            })
            return result
        }

        this.getByID = id => {
            let status = false
            this.data.map(e => {
                if(id == e.id && e.pokedex) status = e
            })
            return status
        }

        this.getPokemonOfSpawn = () => {
            let data = this.data.filter(e => {
                return e.spawn
            })

            if(Math.ceil(Math.random() * 10000) > 9995) {
                data = data.filter(e => {
                    return ['Legendario', 'Mítico', 'Ultra Ente'].includes(e.categoria.nombre)
                })
            }

            data = data[Math.floor(Math.random() * data.length)]

            if(Math.ceil(Math.random() * 10000) > 9995) data.shiny = true
            else data.shiny = false

            return data
        }

        this.pokedex = () => {
            const data = []
            this.data.map(e => {
                if(e.pokedex) data.push(e)
            })
            return data
        }
    }
}

module.exports = new Pokemon()