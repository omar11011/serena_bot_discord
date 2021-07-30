const Base = require('./Swablu').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 334
        this.pokemon = 'Altaria'
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Volador,
        ]
        this.peso = 20.6
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Altaria', item.get('altarianita'))
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('picoteo'), 1],
            [move.get('impresionar'), 3],
            [move.get('ataque furia'), 7],
            [move.get('voz cautivadora'), 11],
            [move.get('canon'), 17],
            [move.get('don natural'), 20],
            [move.get('derribo'), 23],
            [move.get('dragoaliento'), 35],
            [move.get('pulso dragón'), 40],
            [move.get('fuerza lunar'), 52],
            [move.get('ataque aéreo'), 59],
        ]
        this.stats = {
            hp: 75,
            attack: 70,
            defense: 90,
            spattack: 70,
            spdefense: 105,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}