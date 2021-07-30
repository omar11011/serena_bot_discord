const Base = require('../Base')

class Fantasma extends Base {
    constructor() {
        super()
        
        this.nombre = 'Fantasma'
        this.efectividad = {
            efectivo: ['Fantasma', 'Psíquico'],
            pocoEfectivo: ['Siniestro'],
            ineficaz: ['Normal'],
        }
    }
}

module.exports = new Fantasma()