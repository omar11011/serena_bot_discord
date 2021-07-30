const Base = require('../../Tipos/ObjetoDeBatalla')
const Duel = require('../../../../Duelo')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Ataque Especial X'
        this.emoji = '<:xspa:773974609732042762>'
        this.tipo = 'Estadísticas'
        this.descripcion = 'Aumenta el ataque especial de tu Pokémon en 3 puntos durante una batalla.'
        this.spattack = 3
        this.result = `ha incrementado en ${this.spattack} puntos su Ataque Especial.`

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
                    data.powerExtra.spattack += this.spattack
                    duel.folder.establecer('data', data)
                    result.embed = {
                        description: data.pokemon.pokemon + ' ha incrementado su ataque especial en ' + this.spattack + ' puntos'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Objeto()