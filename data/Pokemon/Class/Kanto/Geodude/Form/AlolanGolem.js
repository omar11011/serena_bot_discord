const Base = require('./AlolaGraveler').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 76
        this.pokedex = false
        this.pokemon = 'Golem de Alola'
        this.peso = 316
        this.altura = 1.7
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rodillo de púas'), 10],
            [move.get('chispa'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('puño trueno'), 22],
            [move.get('pedrada'), 34],
            [move.get('chispazo'), 40],
            [move.get('doble filo'), 50],
            [move.get('roca afilada'), 54],
            [move.get('cuerpo pesado'), 54],
        ]
        this.stats = {
            hp: 80,
            attack: 120,
            defense: 130,
            spattack: 55,
            spdefense: 65,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}