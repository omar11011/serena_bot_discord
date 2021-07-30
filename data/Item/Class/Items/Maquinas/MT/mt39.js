const Base = require('../../../Tipos/MT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'MT39'
        this.precio = 360
        this.move = 'Enfado'
        this.descripcion = `Máquina técnica que enseña el movimiento ${this.move}.`
        this.pokemon = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            15,
            31,
            34,
            56,
            57,
            58,
            59,
            103,
            105,
            112,
            115,
            116,
            117,
            127,
            128,
            130,
            131,
            143,
            147,
            148,
            149,
            151,
        ]
    }
}

module.exports = new Item()