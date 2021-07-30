const Base = require('../Base')

class Hielo extends Base {
    constructor() {
        super()
        
        this.nombre = 'Hielo'
        this.efectividad = {
            efectivo: ['Dragón', 'Planta', 'Tierra', 'Volador'],
            pocoEfectivo: ['Acero', 'Fuego', 'Agua', 'Hielo'],
            ineficaz: [],
        }
    }
}

module.exports = new Hielo()