const Base = require('../Base')

class Lucha extends Base {
    constructor() {
        super()
        
        this.nombre = 'Lucha'
        this.efectividad = {
            efectivo: ['Acero', 'Hielo', 'Normal', 'Roca', 'Siniestro'],
            pocoEfectivo: ['Bicho', 'Hada', 'Psíquico', 'Veneno', 'Volador'],
            ineficaz: ['Fantasma'],
        }
    }
}

module.exports = new Lucha()