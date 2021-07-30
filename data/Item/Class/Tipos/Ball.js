const Base = require('../../Base')
const db = require('../../../../server/models')

const addPokedex = require('../../../../util/functions/addPokedex')

const megadb = require('megadb')

class Ball extends Base {
    constructor() {
        super()

        this.categoria = 'Ball'
        this.nombre = 'Ball'
        this.amountUsed = 1
        this.vendible = true

        this.capture = async object => {
            return 1
        }

        this.exec = async object => {
            const result = { error: false }
            const folder = new megadb.crearDB(object.guild, 'spawn')
            const data = await folder.obtener(object.channel)

            if(!data) result.error = true, result.errorMessage = 'No hay ningún pokémon cerca...'
            else {
                object.pokemon = data

                const ratio = await this.capture(object)
                const x = ((data.hpTotal * 3) - (data.hp * 2)) * (data.habitat == 'Pradera' ? 1.5 : 1) * data.ratio * ratio / (data.hpTotal * 3) * data.status.number

                if(x >= 255) result.capture = true
                else {
                    const y = Math.round((65536 / (Math.pow((255 / x), 0.1875))))
                    const a1 = Math.ceil(Math.random() * 65536)
                    const a2 = Math.ceil(Math.random() * 65536)
                    const a3 = Math.ceil(Math.random() * 65536)
                    const a4 = Math.ceil(Math.random() * 65536)

                    if(y > a1 && y > a2 && y > a3 && y > a4) result.capture = true
                    else result.capture = false
                }

                if(result.capture) {
                    folder.eliminar(object.channel)

                    data.db.ball = this.nombre
                    data.db.date = new Date()
                    data.db.trainerId = object.trainerId
                    
                    await db.pokemon.create(data.db)

                    if(!isNaN(data.pokemonId)) {
                        await addPokedex(object.trainerId, data.pokemonId)
                        // const add = await addPokedex(object.trainerId, data.pokemonId)
                    }

                    result.embed = {
                        description: '¡Felicidades! Has capturado un' + (data.db.gender == 'Hembra' ? 'a' : '') + ' ' + (data.db.shiny ? '⭐ ' : '') + data.db.pokemon + '.',
                        // footer: add ? 'Este pokémon ya estaba añadido en tu pokédex.' : 'Se ha añadido este pokémon a tu pokédex.'
                    }
                } else {
                    result.embed = {
                        color: 'RED',
                        description: 'No has capturado al pokémon',
                    }
                }
            }

            return result
        }
    }
}

module.exports = Ball