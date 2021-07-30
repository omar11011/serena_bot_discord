const Base = require('../Base')

class Veneno extends Base {
    constructor() {
        super()
        
        this.nombre = 'Veneno'
        this.efectividad = {
            efectivo: ['Planta', 'Hada'],
            pocoEfectivo: ['Fantasma', 'Roca', 'Tierra', 'Veneno'],
            ineficaz: ['Acero'],
        }
    }
}

module.exports = new Veneno()