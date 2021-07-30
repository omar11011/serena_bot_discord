const Base = require('./Chimchar').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 391
        this.pokemon = 'Monferno'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 22
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Infernape', 36),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 7],
            [move.get('ultra puño'), 14],
            [move.get('golpes furia'), 15],
            [move.get('rueda fuego'), 17],
            [move.get('amago'), 26],
            [move.get('a bocajarro'), 36],
            [move.get('giro fuego'), 39],
            [move.get('acróbata'), 46],
            [move.get('envite ígneo'), 56],
        ]
        this.stats = {
            hp: 64,
            attack: 78,
            defense: 52,
            spattack: 78,
            spdefense: 52,
            speed: 82,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}