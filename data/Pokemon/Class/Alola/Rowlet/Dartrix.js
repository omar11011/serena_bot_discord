const Base = require('./Rowlet').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 723
        this.pokemon = 'Dartrix'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Volador,
        ]
        this.peso = 16
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Decidueye', 34),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('follaje'), 1],
            [move.get('picotazo'), 8],
            [move.get('impresionar'), 11],
            [move.get('hoja afilada'), 14],
            [move.get('viento aciago'), 16],
            [move.get('picoteo'), 24],
            [move.get('ataque furia'), 33],
            [move.get('golpe bajo'), 37],
            [move.get('hoja aguda'), 42],
            [move.get('pájaro osado'), 51],
        ]
        this.stats = {
            hp: 78,
            attack: 75,
            defense: 75,
            spattack: 70,
            spdefense: 70,
            speed: 52,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}