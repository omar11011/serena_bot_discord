const Base = require('../Calyrex').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Calyrex Jinete Glacial'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hielo,
        ]
        this.peso = 809.1
        this.altura = 2.4
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 165,
            defense: 150,
            spattack: 85,
            spdefense: 130,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}