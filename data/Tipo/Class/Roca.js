const Base = require('../Base')

class Roca extends Base {
    constructor() {
        super()
        
        this.nombre = 'Roca'
        this.efectividad = {
            efectivo: ['Bicho', 'Fuego', 'Hielo', 'Volador'],
            pocoEfectivo: ['Acero', 'Lucha', 'Tierra'],
            ineficaz: [],
        }
    }
}

module.exports = new Roca()