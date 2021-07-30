const Base = require('./Cosmoem').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 792
        this.pokemon = 'Lunala'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 120
        this.altura = 3
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Lunala Luna Llena', null, 70),
        ]
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('tinieblas'), 7],
            [move.get('tajo aéreo'), 19],
            [move.get('bola sombra'), 23],
            [move.get('pulso noche'), 37],
            [move.get('fuerza lunar'), 47],
            [move.get('rayo umbrío'), 53],
            [move.get('come sueños'), 59],
            [move.get('golpe fantasma'), 61],
            [move.get('hiperrayo'), 73],
        ]
        this.stats = {
            hp: 137,
            attack: 113,
            defense: 89,
            spattack: 137,
            spdefense: 107,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}