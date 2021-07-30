const Base = require('./Litten').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 726
        this.pokemon = 'Torracat'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.peso = 25
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Incineroar', 34),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 1],
            [move.get('lengüetazo'), 8],
            [move.get('colmillo ígneo'), 14],
            [move.get('doble patada'), 16],
            [move.get('mordisco'), 24],
            [move.get('golpes furia'), 33],
            [move.get('golpe'), 37],
            [move.get('lanzallamas'), 42],
            [move.get('envite ígneo'), 51],
            [move.get('enfado'), 55],
        ]
        this.stats = {
            hp: 65,
            attack: 85,
            defense: 50,
            spattack: 80,
            spdefense: 50,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}