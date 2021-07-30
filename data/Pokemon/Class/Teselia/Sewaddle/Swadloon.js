const Base = require('./Sewaddle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 541
        this.pokemon = 'Swadloon'
        this.peso = 7.3
        this.altura = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Leavanny'),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 8],
            [move.get('hoja afilada'), 15],
            [move.get('estoicismo'), 23],
            [move.get('zumbido'), 39],
            [move.get('azote'), 47],
        ]
        this.stats = {
            hp: 55,
            attack: 63,
            defense: 90,
            spattack: 50,
            spdefense: 80,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}