const Base = require('./Larvesta').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 637
        this.pokemon = 'Volcarona'
        this.peso = 46
        this.altura = 1.6
        this.evolucion = []
        this.captura = 15
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('chupavidas'), 10],
            [move.get('absorber'), 20],
            [move.get('tornado'), 30],
            [move.get('giro fuego'), 40],
            [move.get('viento plata'), 50],
            [move.get('onda ígnea'), 60],
            [move.get('zumbido'), 70],
            [move.get('vendaval'), 90],
            [move.get('envite ígneo'), 100],
        ]
        this.stats = {
            hp: 85,
            attack: 60,
            defense: 65,
            spattack: 135,
            spdefense: 105,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}