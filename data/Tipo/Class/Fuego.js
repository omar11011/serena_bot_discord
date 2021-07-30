const Base = require('../Base')

class Fuego extends Base {
    constructor() {
        super()
        
        this.nombre = 'Fuego'
        this.efectividad = {
            efectivo: ['Acero', 'Bicho', 'Hielo', 'Planta'],
            pocoEfectivo: ['Agua', 'Dragón', 'Fuego', 'Roca'],
            ineficaz: [],
        }
    }
}

module.exports = new Fuego()