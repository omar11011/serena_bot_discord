const Base = require('./Hattrem').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 858
        this.pokemon = 'Hatterene'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.peso = 5.1
        this.altura = 2.1
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Hatterene Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('psicocorte'), 1],
            [move.get('voz cautivadora'), 10],
            [move.get('buena baza'), 16],
            [move.get('psicorrayo'), 20],
            [move.get('brillo mágico'), 30],
            [move.get('giro vil'), 32],
            [move.get('psíquico'), 46],
        ]
        this.stats = {
            hp: 57,
            attack: 90,
            defense: 95,
            spattack: 136,
            spdefense: 103,
            speed: 29,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}