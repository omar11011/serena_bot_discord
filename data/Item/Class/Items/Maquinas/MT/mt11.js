const Base = require('../../../Tipos/MT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'MT11'
        this.precio = 360
        this.move = 'Rayo Solar'
        this.descripcion = `Máquina técnica que enseña el movimiento ${this.move}.`
        this.pokemon = [
            1,
            2,
            3,
            6,
            12,
            35,
            36,
            38,
            39,
            40,
            43,
            44,
            45,
            59,
            77,
            78,
            102,
            103,
            108,
            113,
            114,
            115,
            122,
            128,
            137,
            143,
            146,
            150,
            151,
            173,
            174,
            175,
            176,
            177,
            178,
            182,
            206,
            233,
            241,
            242,
            244,
            250,
            251,
            252,
            253,
            254,
            257,
            270,
            271,
            272,
            273,
            274,
            275,
            290,
            291,
            292,
            293,
            294,
            295,
            303,
            306,
            315,
            324,
            328,
            329,
            330,
            333,
            334,
            338,
            343,
            344,
            345,
            346,
            380,
            381,
            383,
            384,
            406,
            407,
            427,
            428,
            436,
            437,
            439,
            440,
            446,
            459,
            460,
            463,
            465,
            467,
            468,
            470,
            474,
            480,
            485,
            488,
            494,
            526,
            531,
            543,
            544,
            545,
            546,
            547,
            548,
            549,
            554,
            555,
            556,
            557,
            558,
            561,
            569,
            587,
            590,
            591,
            597,
            598,
            607,
            608,
            609,
            615,
            623,
            631,
            636,
            637,
            640,
            643,
            649,
            663,
            695,
            708,
            709,
            710,
            711,
            714,
            715,
            721,
            722,
            723,
            724,
            738,
            743,
            753,
            754,
            755,
            756,
            761,
            762,
            763,
            764,
            776,
            780,
            781,
            787,
            791,
            792,
            796,
            797,
            800,
            801,
            809,
            810,
            811,
            812,
            825,
            826,
            829,
            830,
            839,
            841,
            842,
            851,
            866,
            869,
            884,
            887,
            889,
            890,
            893,
            898,
        ]
    }
}

module.exports = new Item()