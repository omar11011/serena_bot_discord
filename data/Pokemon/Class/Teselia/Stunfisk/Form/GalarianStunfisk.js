const Base = require('../Stunfisk').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Stunfisk de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Acero,
        ]
        this.peso = 20.5
        this.color = Entidades.Color.Verde
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('pistola agua'), 1],
            [move.get('garra metal'), 1],
            [move.get('disparo lodo'), 13],
            [move.get('desquite'), 15],
            [move.get('golpe bajo'), 25],
            [move.get('bote'), 35],
            [move.get('agua lodosa'), 40],
            [move.get('cepo'), 45],
            [move.get('azote'), 50],
            [move.get('fisura'), 55],
        ]
        this.stats = {
            hp: 109,
            attack: 81,
            defense: 99,
            spattack: 66,
            spdefense: 84,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}