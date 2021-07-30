const Base = require('../Gyarados').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Gyarados'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 305
        this.altura = 6.5
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 155,
            defense: 109,
            spattack: 70,
            spdefense: 130,
            speed: 81,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}