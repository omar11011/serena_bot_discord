const Base = require('../../../Tipos/MT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'MT7'
        this.precio = 750
        this.move = 'Perforador'
        this.descripcion = `Máquina técnica que enseña el movimiento ${this.move}.`
        this.pokemon = [
            30,
            31,
            32,
            33,
            34,
            77,
            78,
            86,
            87,
            111,
            112,
            118,
            119,
            128,
            131,
            139,
            148,
            149,
            151,
        ]
    }
}

module.exports = new Item()