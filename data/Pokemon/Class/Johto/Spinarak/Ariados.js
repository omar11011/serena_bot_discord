const Base = require('./Spinarak').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 168
        this.pokemon = 'Ariados'
        this.peso = 33.5
        this.altura = 1.1
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('absorber'), 5],
            [move.get('acoso'), 8],
            [move.get('tinieblas'), 15],
            [move.get('sombra vil'), 19],
            [move.get('golpes furia'), 23],
            [move.get('golpe bajo'), 28],
            [move.get('pin misil'), 41],
            [move.get('psíquico'), 46],
            [move.get('puya nociva'), 50],
            [move.get('veneno x'), 55],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 70,
            spattack: 60,
            spdefense: 70,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}