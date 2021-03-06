const Base = require('../../../Tipos/DT')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'DT5'
        this.precio = 270
        this.move = 'Rayo Hielo'
        this.descripcion = `Disco técnico que enseña el movimiento ${this.move}.`
        this.pokemon = [
            7,
            8,
            9,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            54,
            55,
            60,
            61,
            62,
            72,
            73,
            79,
            80,
            90,
            91,
            98,
            99,
            104,
            105,
            108,
            111,
            112,
            113,
            115,
            116,
            117,
            118,
            119,
            120,
            122,
            124,
            128,
            130,
            131,
            134,
            137,
            138,
            139,
            140,
            141,
            143,
            144,
            147,
            148,
            149,
            150,
            151,
            170,
            171,
            183,
            184,
            186,
            194,
            195,
            199,
            206,
            211,
            215,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            230,
            233,
            238,
            241,
            242,
            245,
            248,
            249,
            258,
            259,
            260,
            263,
            264,
            270,
            271,
            272,
            278,
            279,
            293,
            294,
            295,
            298,
            303,
            306,
            318,
            319,
            320,
            321,
            333,
            334,
            337,
            339,
            340,
            341,
            342,
            343,
            344,
            349,
            350,
            355,
            356,
            359,
            361,
            362,
            363,
            364,
            365,
            369,
            378,
            380,
            381,
            382,
            384,
            422,
            423,
            427,
            428,
            446,
            458,
            459,
            460,
            461,
            463,
            464,
            471,
            473,
            474,
            477,
            478,
            481,
            483,
            484,
            488,
            531,
            550,
            554,
            555,
            561,
            564,
            565,
            582,
            583,
            584,
            592,
            593,
            613,
            614,
            615,
            622,
            623,
            646,
            649,
            688,
            689,
            692,
            693,
            698,
            699,
            705,
            706,
            712,
            713,
            728,
            729,
            730,
            746,
            747,
            748,
            751,
            752,
            768,
            773,
            780,
            788,
            792,
            795,
            801,
            809,
            818,
            834,
            845,
            862,
            864,
            866,
            873,
            875,
            881,
            883,
            896,
            898,
        ]
    }
}

module.exports = new Item()