const Base = require('./Seedot').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 274
        this.pokemon = 'Nuzleaf'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 28
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Item('Shiftry', item.get('piedra hoja')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('hoja afilada'), 1],
            [move.get('sorpresa'), 12],
            [move.get('viento cortante'), 20],
            [move.get('finta'), 24],
            [move.get('hoja aguda'), 28],
            [move.get('paranormal'), 36],
        ]
        this.stats = {
            hp: 70,
            attack: 70,
            defense: 40,
            spattack: 60,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}