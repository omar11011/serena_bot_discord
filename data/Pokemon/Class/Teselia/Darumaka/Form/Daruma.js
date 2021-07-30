const Base = require('../Darmanitan').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Darmanitan Modo Daruma'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 30,
            defense: 105,
            spattack: 140,
            spdefense: 105,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}