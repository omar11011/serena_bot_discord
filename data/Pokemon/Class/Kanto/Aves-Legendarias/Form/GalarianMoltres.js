const Base = require('../Moltres').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Moltres de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.peso = 66
        this.altura = 2
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('vendetta'), 5],
            [move.get('ataque ala'), 15],
            [move.get('poder pasado'), 25],
            [move.get('golpe bajo'), 30],
            [move.get('tajo aéreo'), 35],
            [move.get('furia candente'), 45],
            [move.get('vendaval'), 55],
            [move.get('ataque aéreo'), 70],
        ]
        this.stats = {
            hp: 90,
            attack: 85,
            defense: 90,
            spattack: 100,
            spdefense: 125,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}