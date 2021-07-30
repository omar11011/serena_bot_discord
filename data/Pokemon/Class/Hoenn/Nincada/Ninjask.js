const Base = require('./Nincada').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 291
        this.pokemon = 'Ninjask'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.peso = 12
        this.altura = 0.8
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 120
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('picadura'), 1],
            [move.get('absorber'), 5],
            [move.get('golpes furia'), 13],
            [move.get('bofetón lodo'), 17],
            [move.get('corte furia'), 20],
            [move.get('cuchillada'), 23],
            [move.get('tijera x'), 47],
        ]
        this.stats = {
            hp: 61,
            attack: 90,
            defense: 45,
            spattack: 50,
            spdefense: 50,
            speed: 160,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}