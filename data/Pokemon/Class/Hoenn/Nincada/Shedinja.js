const Base = require('./Nincada').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 292
        this.pokemon = 'Shedinja'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 1.8
        this.altura = 0.8
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('absorber'), 5],
            [move.get('golpes furia'), 13],
            [move.get('sombra vil'), 21],
            [move.get('bola sombra'), 33],
            [move.get('golpe fantasma'), 45],
        ]
        this.stats = {
            hp: 1,
            attack: 90,
            defense: 45,
            spattack: 30,
            spdefense: 30,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}