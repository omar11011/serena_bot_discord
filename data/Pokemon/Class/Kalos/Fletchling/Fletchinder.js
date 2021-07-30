const Base = require('./Fletchling').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 662
        this.pokemon = 'Fletchinder'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Volador,
        ]
        this.peso = 16
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Talonflame', 35),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('picotazo'), 10],
            [move.get('azote'), 16],
            [move.get('ascuas'), 17],
            [move.get('viento cortante'), 27],
            [move.get('don natural'), 31],
            [move.get('nitrocarga'), 38],
            [move.get('acróbata'), 42],
            [move.get('ala de acero'), 55],
        ]
        this.stats = {
            hp: 62,
            attack: 73,
            defense: 55,
            spattack: 56,
            spdefense: 52,
            speed: 84,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}