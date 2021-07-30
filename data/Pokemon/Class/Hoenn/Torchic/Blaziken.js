const Base = require('./Combusken').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 257
        this.pokemon = 'Blaziken'
        this.peso = 52
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Blaziken', item.get('blazikenita')),
            new Entidades.Evolucion.Gigamax('Blaziken Gigamax'),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('puño fuego'), 1],
            [move.get('patada salto alta'), 1],
            [move.get('ascuas'), 5],
            [move.get('picotazo'), 14],
            [move.get('doble patada'), 16],
            [move.get('nitrocarga'), 20],
            [move.get('ataque rápido'), 25],
            [move.get('patada ígnea'), 36],
            [move.get('pájaro osado'), 50],
            [move.get('gancho alto'), 57],
            [move.get('envite ígneo'), 63],
        ]
        this.stats = {
            hp: 80,
            attack: 120,
            defense: 70,
            spattack: 110,
            spdefense: 70,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}