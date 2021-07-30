const Base = require('./SaifeHelioptile').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 695
        this.pokemon = 'Heliolisk de Saife'
        this.peso = 30
        this.altura = 1.1
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('impresionar'), 1],
            [move.get('puño bala'), 6],
            [move.get('nitrocarga'), 13],
            [move.get('ataque rápido'), 17],
            [move.get('puño meteoro'), 22],
            [move.get('pirotecnia'), 25],
            [move.get('sofoco'), 37],
            [move.get('cola férrea'), 44],
            [move.get('deseo oculto'), 50],
            [move.get('hiperrayo'), 60],
        ]
        this.stats = {
            hp: 62,
            attack: 55,
            defense: 52,
            spattack: 109,
            spdefense: 94,
            speed: 109,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}