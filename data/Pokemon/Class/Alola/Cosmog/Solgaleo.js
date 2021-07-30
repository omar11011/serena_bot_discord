const Base = require('./Cosmoem').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 791
        this.pokemon = 'Solgaleo'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Acero,
        ]
        this.peso = 230
        this.altura = 3.4
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Solgaleo Sol Ascendente', null, 70),
        ]
        this.movimientos = [
            [move.get('espabila'), 1],
            [move.get('garra metal'), 1],
            [move.get('cabeza de hierro'), 7],
            [move.get('cabezazo zen'), 19],
            [move.get('foco resplandor'), 23],
            [move.get('triturar'), 37],
            [move.get('represión metálica'), 43],
            [move.get('rayo solar'), 47],
            [move.get('meteoimpacto'), 55],
            [move.get('envite ígneo'), 61],
            [move.get('giga impacto'), 73],
        ]
        this.stats = {
            hp: 137,
            attack: 137,
            defense: 107,
            spattack: 113,
            spdefense: 89,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}