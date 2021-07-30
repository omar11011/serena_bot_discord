const Base = require('./Tyrogue').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 237
        this.pokemon = 'Hitmontop'
        this.peso = 48
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('desquite'), 1],
            [move.get('persecución'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('giro rápido'), 1],
            [move.get('patada giro'), 1],
            [move.get('amago'), 1],
            [move.get('contraataque'), 1],
            [move.get('triple patada'), 1],
            [move.get('giro bola'), 1],
            [move.get('a bocajarro'), 1],
            [move.get('esfuerzo'), 1],
        ]
        this.stats = {
            hp: 50,
            attack: 95,
            defense: 95,
            spattack: 35,
            spdefense: 110,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}