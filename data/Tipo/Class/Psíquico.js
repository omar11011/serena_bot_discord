const Base = require('../Base')

class Psíquico extends Base {
    constructor() {
        super()
        
        this.nombre = 'Psíquico'
        this.efectividad = {
            efectivo: ['Lucha', 'Veneno'],
            pocoEfectivo: ['Acero', 'Psíquico'],
            ineficaz: ['Siniestro'],
        }
    }
}

module.exports = new Psíquico()