const Base = require('../Entei').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Entei de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Hielo,
        ]
        this.color = Entidades.Color.Blanco
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('confusión'), 8],
            [move.get('canto helado'), 22],
            [move.get('pisotón'), 29],
            [move.get('rayo aurora'), 36],
            [move.get('tajo umbrío'), 50],
            [move.get('rayo hielo'), 57],
            [move.get('paranormal'), 64],
            [move.get('juego sucio'), 71],
            [move.get('frío polar'), 85],
        ]
        this.stats = {
            hp: 115,
            attack: 125,
            defense: 85,
            spattack: 90,
            spdefense: 85,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}