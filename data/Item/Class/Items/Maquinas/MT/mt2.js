const Base = require('../../../Tipos/MT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'MT2'
        this.precio = 240
        this.move = 'Viento Cortante'
        this.descripcion = `Máquina técnica que enseña el movimiento ${this.move}.`
        this.pokemon = [
            12,
            16,
            17,
            18,
            21,
            22,
            41,
            42,
            49,
            83,
            141,
            142,
            144,
            145,
            146,
            149,
            151,
        ]
    }
}

module.exports = new Item()