const Base = require('./Froakie').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 657
        this.pokemon = 'Frogadier'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.peso = 10.9
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Greninja', 36),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 5],
            [move.get('ataque rápido'), 8],
            [move.get('lengüetazo'), 10],
            [move.get('hidropulso'), 14],
            [move.get('canon'), 23],
            [move.get('lanzamiento'), 28],
            [move.get('antiaéreo'), 33],
            [move.get('bote'), 45],
            [move.get('hidrobomba'), 56],
        ]
        this.stats = {
            hp: 54,
            attack: 63,
            defense: 52,
            spattack: 83,
            spdefense: 56,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}