const Base = require('../Base')

class Planta extends Base {
    constructor() {
        super()
        
        this.nombre = 'Planta'
        this.efectividad = {
            efectivo: ['Agua', 'Roca', 'Tierra'],
            pocoEfectivo: ['Acero', 'Bicho', 'Dragón', 'Fuego', 'Planta', 'Veneno', 'Volador'],
            ineficaz: [],
        }
    }
}

module.exports = new Planta()