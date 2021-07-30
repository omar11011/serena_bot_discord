const Base = require('./Fennekin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 654
        this.pokemon = 'Braixen'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.peso = 14.5
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Delphox', 36),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('nitrocarga'), 14],
            [move.get('psicorrayo'), 18],
            [move.get('giro fuego'), 22],
            [move.get('psicocarga'), 36],
            [move.get('lanzallamas'), 41],
            [move.get('psíquico'), 49],
            [move.get('llamarada'), 59],
        ]
        this.stats = {
            hp: 59,
            attack: 59,
            defense: 58,
            spattack: 90,
            spdefense: 70,
            speed: 73,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}