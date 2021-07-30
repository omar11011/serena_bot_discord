const db = require('../../server/models')

const addPokedex = async (trainerId, pokemonId) => {
    const data = await db.pokedex.findOne({ where: { trainerId: trainerId } }) || {  }

    if(data.pokemon) data.pokemon = data.pokemon.split(",")
    else data.pokemon = []

    if(!data.pokemon.includes(pokemonId.toString())) {
        data.pokemon.push(pokemonId)
        await db.pokedex.update({ pokemon: data.pokemon.join(",") }, { where: { id: data.id } })
        return true
    }

    return false
}

module.exports = addPokedex