const Base = require('./Spewpa').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 666
        this.pokemon = 'Vivillon'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.peso = 17
        this.altura = 1.2
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('estoicismo'), 1],
            [move.get('tornado'), 12],
            [move.get('beso drenaje'), 25],
            [move.get('zumbido'), 35],
            [move.get('vendaval'), 50],
        ]
        this.stats = {
            hp: 80,
            attack: 52,
            defense: 50,
            spattack: 90,
            spdefense: 50,
            speed: 89,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}