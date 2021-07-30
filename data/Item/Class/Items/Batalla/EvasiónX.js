const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Evasión X'
        this.emoji = '<:xevasion:773974658457534494>'
        this.tipo = 'Habilidades'
        this.descripcion = 'Aumenta la evasión de tu Pokémon en 5 puntos durante una batalla.'
        this.evasion = 5
        this.result = `ha incrementado en ${this.evasion} puntos su Evasión.`

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
                    data.usedObjects++
                    data.power.evasion += this.evasion
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su evasión en ' + this.evasion + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()