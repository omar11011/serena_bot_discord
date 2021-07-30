const Base = require('./SaifeBuneary').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 428
        this.pokemon = 'Lopunny de Saife'
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 18
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Lopunny de Saife', item.get('lopunnita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('impresionar'), 1],
            [move.get('ultra puño'), 5],
            [move.get('sombra vil'), 8],
            [move.get('patada giro'), 12],
            [move.get('viento aciago'), 23],
            [move.get('gancho alto'), 30],
            [move.get('garra umbría'), 36],
            [move.get('golpe fantasma'), 40],
            [move.get('tajo cruzado'), 45],
            [move.get('golpe umbrío'), 52],
            [move.get('puño certero'), 55],
        ]
        this.stats = {
            hp: 65,
            attack: 81,
            defense: 84,
            spattack: 54,
            spdefense: 96,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}