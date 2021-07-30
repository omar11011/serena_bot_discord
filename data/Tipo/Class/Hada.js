const Base = require('../Base')

class Hada extends Base {
    constructor() {
        super()
        
        this.nombre = 'Hada'
        this.efectividad = {
            efectivo: ['Dragón', 'Lucha', 'Siniestro', 'Oscuro'],
            pocoEfectivo: ['Acero', 'Fuego', 'Veneno'],
            ineficaz: [],
        }
    }
}

module.exports = new Hada()