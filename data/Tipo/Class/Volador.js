const Base = require('../Base')

class Volador extends Base {
    constructor() {
        super()
        
        this.nombre = 'Volador'
        this.efectividad = {
            efectivo: ['Bicho', 'Lucha', 'Planta'],
            pocoEfectivo: ['Acero', 'Eléctrico', 'Roca'],
            ineficaz: [],
        }
    }
}

module.exports = new Volador()