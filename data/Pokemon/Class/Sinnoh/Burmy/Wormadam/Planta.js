const Base = require('../Form/Planta').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 413
        this.pokedex = true
        this.pokemon = 'Wormadam Tronco Planta'
        this.peso = 6.5
        this.altura = 0.5
        this.probMacho = 0
        this.probHembra = 1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe bajo'), 1],
            [move.get('picadura'), 15],
            [move.get('poder oculto'), 20],
            [move.get('confusión'), 23],
            [move.get('hoja afilada'), 26],
            [move.get('psicorrayo'), 32],
            [move.get('azote'), 38],
            [move.get('psíquico'), 44],
            [move.get('lluevehojas'), 47],
            [move.get('zumbido'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 59,
            defense: 85,
            spattack: 79,
            spdefense: 105,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}