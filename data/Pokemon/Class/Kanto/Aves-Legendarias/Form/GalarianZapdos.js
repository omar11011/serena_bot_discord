const Base = require('../Zapdos').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Zapdos de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Volador,
        ]
        this.peso = 58.2
        this.altura = 1.6
        this.evolucion = []
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('golpe roca'), 5],
            [move.get('picoteo'), 15],
            [move.get('poder pasado'), 25],
            [move.get('demolición'), 30],
            [move.get('pico taladro'), 35],
            [move.get('patada relámpago'), 45],
            [move.get('contraataque'), 55],
            [move.get('a bocajarro'), 65],
            [move.get('inversión'), 70],
        ]
        this.stats = {
            hp: 90,
            attack: 125,
            defense: 90,
            spattack: 85,
            spdefense: 90,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}