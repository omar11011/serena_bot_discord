const Base = require('../Base')

class Siniestro extends Base {
    constructor() {
        super()
        
        this.nombre = 'Siniestro'
        this.efectividad = {
            efectivo: ['Fantasma', 'Psíquico'],
            pocoEfectivo: ['Hada', 'Lucha', 'Siniestro'],
            ineficaz: [],
        }
    }
}

module.exports = new Siniestro()