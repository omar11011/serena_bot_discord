const Base = require('../Base')

class Errático extends Base {
    constructor() {
        super()

        this.nombre = 'Errático'

        this.needExp = level => {
            let result = 0

            if(level <= 50) result = Math.pow(level, 3) * (2 - 0.02 * level)
            else if(level > 50 && level <= 68) result = Math.pow(level, 3) * (1.5 - 0.01 * level)
            else if(level > 68 && level <= 98) {
                let modulo = level % 3

                if(modulo < 1) modulo = 0
                else if(modulo > 0 && modulo < 2) modulo = 0.008
                else modulo = 0.014

                result = Math.pow(level, 3) * (1.274 - 0.02 * (level / 3) - modulo)
            }
            else result = Math.pow(level, 3) * (1.6 - 0.01 * level)

            return Math.round(result)
        }
    }
}

module.exports = new Errático()