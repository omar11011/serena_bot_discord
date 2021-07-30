const Pokemon = require('../../data/Pokemon')

const get = pokemon => {
    const evolutions = []

    Pokemon.map(e => {
        if(e.evolucion.length > 0) {
            e.evolucion.map(f => {
                if(!['Gigamax', 'Mega', 'Temporal'].includes(f.tipo) && f.evolucion.toLowerCase() == pokemon.toLowerCase()) evolutions.push(e.pokemon)
            })
        }
    })
    
    if(evolutions.length > 0) {
        pokemon = evolutions[Math.floor(Math.random() * evolutions.length)]
        return get(pokemon)
    }
    else return pokemon
}

module.exports = get