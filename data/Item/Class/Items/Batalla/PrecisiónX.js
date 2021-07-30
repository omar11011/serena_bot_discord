const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Precisión X'
        this.emoji = '<:xaccuracy:773974698459529236>'
        this.tipo = 'Habilidades'
        this.descripcion = 'Aumenta la precisión de tu Pokémon en 5 puntos durante una batalla.'
        this.precision = 5
        this.result = `ha incrementado en ${this.precision} puntos su Precisión.`

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
                    data.power.precision += this.precision
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su precisión en ' + this.precision + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()