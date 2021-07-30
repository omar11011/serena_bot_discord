const Base = require('../Base')

class Eléctrico extends Base {
    constructor() {
        super()
        
        this.nombre = 'Eléctrico'
        this.efectividad = {
            efectivo: ['Agua', 'Volador'],
            pocoEfectivo: ['Dragón', 'Eléctrico', 'Planta'],
            ineficaz: ['Tierra'],
        }
    }
}

module.exports = new Eléctrico()