const Base = require('../Base')

class Acero extends Base {
    constructor() {
        super()

        this.nombre = 'Acero'
        this.efectividad = {
            efectivo: ['Hada', 'Hielo', 'Roca'],
            pocoEfectivo: ['Acero', 'Agua', 'Eléctrico', 'Fuego'],
            ineficaz: [],
        }
    }
}

module.exports = new Acero()