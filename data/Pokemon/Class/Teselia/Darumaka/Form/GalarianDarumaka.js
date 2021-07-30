const Base = require('../Darumaka').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Darumaka de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.peso = 40
        this.altura = 0.7
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Item('Darmanitan de Galar', item.get('piedra hielo')),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('nieve polvo'), 1],
            [move.get('mordisco'), 8],
            [move.get('alud'), 12],
            [move.get('colmillo hielo'), 20],
            [move.get('golpe cabeza'), 24],
            [move.get('puño hielo'), 28],
            [move.get('alboroto'), 32],
            [move.get('ventisca'), 40],
            [move.get('golpe'), 44],
            [move.get('fuerza bruta'), 48],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 45,
            spattack: 15,
            spdefense: 45,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}