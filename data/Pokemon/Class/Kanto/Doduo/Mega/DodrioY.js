const Base = require('../Dodrio').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Dodrio Y'
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.peso = 87
        this.evolucion = []
        this.stats = {
            hp: 120,
            attack: 80,
            defense: 85,
            spattack: 80,
            spdefense: 90,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}