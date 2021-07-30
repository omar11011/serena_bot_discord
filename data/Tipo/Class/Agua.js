const Base = require('../Base')

class Agua extends Base {
    constructor() {
        super()
        
        this.nombre = 'Agua'
        this.efectividad = {
            efectivo: ['Fuego', 'Roca', 'Tierra'],
            pocoEfectivo: ['Agua', 'Dragón', 'Planta'],
            ineficaz: [],
        }
    }
}

module.exports = new Agua()