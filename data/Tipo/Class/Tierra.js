const Base = require('../Base')

class Tierra extends Base {
    constructor() {
        super()
        
        this.nombre = 'Tierra'
        this.efectividad = {
            efectivo: ['Acero', 'Eléctrico', 'Roca', 'Veneno', 'Fuego'],
            pocoEfectivo: ['Bicho', 'Planta'],
            ineficaz: ['Volador'],
        }
    }
}

module.exports = new Tierra()