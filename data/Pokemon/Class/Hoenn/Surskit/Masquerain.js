const Base = require('./Surskit').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 284
        this.pokemon = 'Masquerain'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.peso = 3.6
        this.altura = 0.8
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('viento aciago'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('tornado'), 17],
            [move.get('aire afilado'), 22],
            [move.get('viento plata'), 32],
            [move.get('tajo aéreo'), 38],
            [move.get('zumbido'), 42],
        ]
        this.stats = {
            hp: 70,
            attack: 60,
            defense: 62,
            spattack: 100,
            spdefense: 82,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}