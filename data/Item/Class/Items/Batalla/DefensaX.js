const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')
class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Defensa X'
        this.emoji = '<:xdefense:773974578812813352>'
        this.tipo = 'Estadísticas'
        this.descripcion = 'Aumenta la defensa de tu Pokémon en 3 puntos durante una batalla.'
        this.defense = 3
        this.result = `ha incrementado en ${this.defense} puntos su Defensa.`

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
                    data.powerExtra.defense += this.defense
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su defensa en ' + this.defense + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()