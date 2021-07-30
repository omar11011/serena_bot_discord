const Base = require('../Minun').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Minun de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Siniestro,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.movimientos = [
            [move.get('vendetta'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('chispa'), 7],
            [move.get('mordisco'), 16],
            [move.get('bola voltio'), 19],
            [move.get('chispazo'), 31],
            [move.get('pulso noche'), 40],
            [move.get('trueno'), 43],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}