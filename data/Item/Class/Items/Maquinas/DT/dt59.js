const Base = require('../../../Tipos/DT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'DT59'
        this.precio = 240
        this.move = 'Bomba Germen'
        this.descripcion = `Disco técnico que enseña el movimiento ${this.move}.`
        this.pokemon = [
            1,
            2,
            3,
            43,
            44,
            45,
            52,
            53,
            102,
            103,
            114,
            143,
            151,
            182,
            223,
            224,
            225,
            226,
            251,
            252,
            253,
            254,
            263,
            264,
            270,
            271,
            272,
            273,
            274,
            275,
            279,
            315,
            345,
            346,
            406,
            407,
            420,
            421,
            446,
            459,
            460,
            465,
            470,
            509,
            510,
            546,
            547,
            548,
            549,
            556,
            568,
            569,
            572,
            573,
            590,
            591,
            597,
            598,
            640,
            708,
            709,
            710,
            711,
            722,
            723,
            724,
            753,
            754,
            755,
            756,
            761,
            762,
            763,
            764,
            766,
            787,
            797,
            819,
            820,
            830,
            841,
            842,
            862,
            863,
            877,
            893,
            898,
        ]
    }
}

module.exports = new Item()