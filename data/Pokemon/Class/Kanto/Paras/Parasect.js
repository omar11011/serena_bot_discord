const Base = require('./Paras').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 47
        this.pokemon = 'Parasect'
        this.peso = 29.5
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('veneno x'), 1],
            [move.get('absorber'), 1],
            [move.get('chupavidas'), 11],
            [move.get('corte furia'), 17],
            [move.get('cuchillada'), 29],
            [move.get('gigadrenado'), 44],
            [move.get('tijera x'), 66],
        ]
        this.stats = {
            hp: 60,
            attack: 95,
            defense: 80,
            spattack: 60,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}