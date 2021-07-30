const Base = require('../Calyrex').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Calyrex Jinete Espectral'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 53.6
        this.altura = 2.4
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 85,
            defense: 80,
            spattack: 165,
            spdefense: 100,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}