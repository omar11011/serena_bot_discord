const Base = require('./AlolanVulpix').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 38
        this.pokedex = false
        this.pokemon = 'Ninetales de Alola'
        this.peso = 19.9
        this.altura = 1.1
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Hada,
        ]
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('brillo mágico'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('canto helado'), 10],
            [move.get('viento hielo'), 15],
            [move.get('vendetta'), 18],
            [move.get('finta'), 23],
            [move.get('infortunio'), 26],
            [move.get('rayo aurora'), 28],
            [move.get('paranormal'), 31],
            [move.get('rayo hielo'), 36],
            [move.get('ventisca'), 42],
            [move.get('frío polar'), 50],
        ]
        this.stats = {
            hp: 73,
            attack: 67,
            defense: 75,
            spattack: 81,
            spdefense: 100,
            speed: 109,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}