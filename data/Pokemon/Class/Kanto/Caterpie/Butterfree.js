const Base = require('./Metapod').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 12
        this.pokemon = 'Butterfree'
        this.peso = 32
        this.altura = 1.1
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Butterfree', item.get('butterfrita')),
            new Entidades.Evolucion.Gigamax('Butterfree Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento cortante'), 5],
            [move.get('confusión'), 10],
            [move.get('tornado'), 16],
            [move.get('psicorrayo'), 24],
            [move.get('viento plata'), 28],
            [move.get('zumbido'), 31],
            [move.get('tajo aéreo'), 43],
        ]
        this.stats = {
            hp: 60,
            attack: 45,
            defense: 50,
            spattack: 90,
            spdefense: 80,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}