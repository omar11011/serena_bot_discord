const Base = require('../Base')

class Bicho extends Base {
    constructor() {
        super()
        
        this.nombre = 'Bicho'
        this.efectividad = {
            efectivo: ['Planta', 'Psíquico', 'Siniestro'],
            pocoEfectivo: ['Acero', 'Fantasma', 'Fuego', 'Hada', 'Lucha', 'Veneno', 'Volador'],
            ineficaz: [],
        }
    }
}

module.exports = new Bicho()