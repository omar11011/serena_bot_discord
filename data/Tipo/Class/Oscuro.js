const Base = require('../Base')

class Oscuro extends Base {
    constructor() {
        super()
        
        this.nombre = 'Oscuro'
        this.efectividad = {
            efectivo: ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fuego', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Tierra', 'Veneno', 'Volador'],
            pocoEfectivo: ['Oscuro', 'Siniestro'],
            ineficaz: ['Hada', 'Fantasma'],
        }
    }
}

module.exports = new Oscuro()