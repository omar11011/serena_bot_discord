const Base = require('../Meloetta').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Meloetta Forma Ídola'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.color = Entidades.Color.Blanco
        this.movimientos = [
            [move.get('canon'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('confusión'), 11],
            [move.get('acróbata'), 26],
            [move.get('psicorrayo'), 31],
            [move.get('eco voz'), 36],
            [move.get('carantoña'), 50],
            [move.get('psíquico'), 57],
            [move.get('vozarrón'), 64],
            [move.get('luz aniquiladora'), 78],
        ]
        this.stats = {
            hp: 100,
            attack: 90,
            defense: 90,
            spattack: 145,
            spdefense: 80,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}