const Base = require('./Brionne').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 730
        this.pokemon = 'Primarina'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hada,
        ]
        this.peso = 44
        this.altura = 1.8
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Primarina', item.get('primarinadita')),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 1],
            [move.get('voz cautivadora'), 8],
            [move.get('acua jet'), 14],
            [move.get('viento hielo'), 16],
            [move.get('rayo burbuja'), 24],
            [move.get('doble bofetón'), 33],
            [move.get('vozarrón'), 38],
            [move.get('aria burbuja'), 40],
            [move.get('fuerza lunar'), 44],
            [move.get('hidrobomba'), 55],
        ]
        this.stats = {
            hp: 80,
            attack: 74,
            defense: 74,
            spattack: 126,
            spdefense: 116,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}