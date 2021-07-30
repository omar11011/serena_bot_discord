const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Velocidad X'
        this.emoji = '<:xspeed:773974640812359681>'
        this.tipo = 'Estadísticas'
        this.descripcion = 'Aumenta la velocidad de tu Pokémon en 3 puntos durante una batalla.'
        this.speed = 3
        this.result = `ha incrementado en ${this.speed} puntos su Velocidad.`

        this.exec = async object => {
            const result = { error: false }
            const duel = new Duel.base(false, object.user)
            const data = await duel.get()
            
            if(!data) {
                result.error = true
                result.errorMessage = 'No estás dentro de ningún combate.'
                duel.delete()
            }
            else {
                if(data.config.usedObjects == 5) result.error = true, result.errorMessage = 'Ya usaste 5 objetos durante el combate.'
                else {
                    data.config.usedObjects++
                    data.powerExtra.speed += this.speed
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su velocidad en ' + this.speed + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()