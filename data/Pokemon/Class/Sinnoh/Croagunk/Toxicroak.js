const Base = require('./Croagunk').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 454
        this.pokemon = 'Toxicroak'
        this.peso = 44.4
        this.altura = 1.3
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('bofetón lodo'), 3],
            [move.get('picotazo venenoso'), 8],
            [move.get('persecución'), 15],
            [move.get('finta'), 17],
            [move.get('desquite'), 22],
            [move.get('bomba fango'), 29],
            [move.get('golpe bajo'), 31],
            [move.get('carga tóxica'), 36],
            [move.get('puya nociva'), 49],
            [move.get('bomba lodo'), 54],
            [move.get('eructo'), 58],
        ]
        this.stats = {
            hp: 83,
            attack: 106,
            defense: 65,
            spattack: 86,
            spdefense: 65,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}