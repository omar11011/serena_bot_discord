const Base = require('../Dodrio').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Dodrio X'
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.peso = 90
        this.evolucion = []
        this.stats = {
            hp: 110,
            attack: 90,
            defense: 75,
            spattack: 90,
            spdefense: 70,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}