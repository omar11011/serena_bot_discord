const Base = require('../Base')

class Normal extends Base {
    constructor() {
        super()

        this.nombre = 'Normal'
        this.efectividad = {
            efectivo: [],
            pocoEfectivo: ['Acero', 'Roca'],
            ineficaz: ['Fantasma'],
        }
    }
}

module.exports = new Normal()