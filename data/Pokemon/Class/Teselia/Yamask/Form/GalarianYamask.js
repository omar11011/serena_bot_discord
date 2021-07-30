const Base = require('../Yamask').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Yamask de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 1.5
        this.altura = 0.5
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Runerigus', 34),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('tinieblas'), 13],
            [move.get('giro vil'), 16],
            [move.get('infortunio'), 24],
            [move.get('atizar'), 32],
            [move.get('bola sombra'), 40],
            [move.get('terremoto'), 44],
        ]
        this.stats = {
            hp: 38,
            attack: 55,
            defense: 85,
            spattack: 30,
            spdefense: 65,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}