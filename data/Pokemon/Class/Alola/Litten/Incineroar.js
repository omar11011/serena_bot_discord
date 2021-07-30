const Base = require('./Litten').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 727
        this.pokemon = 'Incineroar'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 83
        this.altura = 1.8
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 1],
            [move.get('lengüetazo'), 8],
            [move.get('colmillo ígneo'), 14],
            [move.get('doble patada'), 16],
            [move.get('mordisco'), 24],
            [move.get('golpes furia'), 33],
            [move.get('golpe mordaza'), 34],
            [move.get('golpe'), 38],
            [move.get('lanzallamas'), 44],
            [move.get('envite ígneo'), 55],
            [move.get('lariat oscuro'), 57],
            [move.get('enfado'), 60],
            [move.get('tajo cruzado'), 66],
        ]
        this.stats = {
            hp: 95,
            attack: 115,
            defense: 90,
            spattack: 80,
            spdefense: 90,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}