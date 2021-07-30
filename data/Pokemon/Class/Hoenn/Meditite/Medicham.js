const Base = require('./Meditite').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 308
        this.pokemon = 'Medicham'
        this.peso = 31.5
        this.altura = 1.3
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Medicham', item.get('medichamita')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('puño fuego'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño hielo'), 1],
            [move.get('cabezazo zen'), 1],
            [move.get('confusión'), 7],
            [move.get('amago'), 15],
            [move.get('palmeo'), 17],
            [move.get('poder oculto'), 20],
            [move.get('patada salto alta'), 25],
            [move.get('inversión'), 42],
            [move.get('contraataque'), 53],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 75,
            spattack: 60,
            spdefense: 75,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}