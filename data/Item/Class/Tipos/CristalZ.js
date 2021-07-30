const Base = require('../../Base')

class CristalZ extends Base {
    constructor() {
        super()

        this.categoria = 'Cristal Z'
        this.precio = 80000
        this.precision = 100
        this.gastable = false

        this.potencia = potencia => {
            if(potencia <= 55) return 100
            else if([60, 65].includes(potencia)) return 120
            else if([70, 75].includes(potencia)) return 140
            else if([80, 85].includes(potencia)) return 160
            else if([90, 95].includes(potencia)) return 175
            else if(potencia == 100) return 180
            else if(potencia == 110) return 185
            else if([115, 120, 125].includes(potencia)) return 190
            else if(potencia == 130) return 195
            else if(potencia > 130) return 200
            else return 50
        }

        this.exec = async object => {
            return { error: true, errorMessage: 'Los objetos de esta categoría se usan durante los combates de la siguiente manera: `' + object.prefix + 'move [move] z`.' }
        }
    }
}

module.exports = CristalZ