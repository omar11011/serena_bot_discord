const Base = require('../Base')

class Dragón extends Base {
    constructor() {
        super()

        this.nombre = 'Dragón'
        this.efectividad = {
            efectivo: ['Dragón'],
            pocoEfectivo: ['Acero'],
            ineficaz: ['Hada'],
        }
    }
}

module.exports = new Dragón()