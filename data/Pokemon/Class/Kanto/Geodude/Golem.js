const Base = require('./Graveler').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 76
        this.pokemon = 'Golem'
        this.peso = 300
        this.altura = 1.4
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rodillo de púas'), 10],
            [move.get('magnitud'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('terratemblor'), 22],
            [move.get('pedrada'), 34],
            [move.get('terremoto'), 40],
            [move.get('doble filo'), 50],
            [move.get('roca afilada'), 54],
            [move.get('cuerpo pesado'), 60],
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