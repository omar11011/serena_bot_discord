const Base = require('./Beldum').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 375
        this.pokemon = 'Metang'
        this.peso = 202.5
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Metagross', 45),
        ]
        this.movimientos = [
            [move.get('derribo'), 1],
            [move.get('confusión'), 20],
            [move.get('garra metal'), 20],
            [move.get('persecución'), 23],
            [move.get('puño bala'), 26],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 38],
            [move.get('puño meteoro'), 44],
            [move.get('hiperrayo'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 75,
            defense: 100,
            spattack: 55,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}