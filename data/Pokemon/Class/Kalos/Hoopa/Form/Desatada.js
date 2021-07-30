const Base = require('../Hoopa').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Hoopa Forma Desatada'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 490
        this.altura = 6.5
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 160,
            defense: 60,
            spattack: 170,
            spdefense: 130,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}