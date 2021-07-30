const Base = require('./Whismur').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 294
        this.pokemon = 'Loudred'
        this.peso = 40.5
        this.altura = 1
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Exploud', 40),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('eco voz'), 4],
            [move.get('impresionar'), 9],
            [move.get('mordisco'), 20],
            [move.get('pisotón'), 23],
            [move.get('alboroto'), 27],
            [move.get('vozarrón'), 45],
            [move.get('sincorruido'), 50],
        ]
        this.stats = {
            hp: 84,
            attack: 71,
            defense: 43,
            spattack: 71,
            spdefense: 43,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}