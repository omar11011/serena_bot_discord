const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Ataque X'
        this.emoji = '<:xattack:773974558982144010>'
        this.tipo = 'Estadísticas'
        this.descripcion = 'Aumenta el ataque de tu Pokémon en 3 puntos durante una batalla.'
        this.attack = 3
        this.result = `ha incrementado en ${this.attack} puntos su Ataque.`

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
                    data.powerExtra.attack += this.attack
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su ataque en ' + this.attack + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()