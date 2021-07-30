const Base = require('./Dottler').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 826
        this.pokemon = 'Orbeetle'
        this.peso = 40.8
        this.altura = 0.4
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Orbeetle Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('estoicismo'), 1],
            [move.get('confusión'), 1],
            [move.get('psicorrayo'), 16],
            [move.get('zumbido'), 28],
            [move.get('manto espejo'), 32],
            [move.get('psíquico'), 36],
        ]
        this.stats = {
            hp: 60,
            attack: 45,
            defense: 110,
            spattack: 80,
            spdefense: 120,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}