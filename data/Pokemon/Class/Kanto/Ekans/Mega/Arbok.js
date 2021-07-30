const Base = require('../Arbok').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Arbok'
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 75
        this.altura = 3.5
        this.evolucion = []
        this.color = Entidades.Color.Negro
        this.stats = {
            hp: 70,
            attack: 125,
            defense: 70,
            spattack: 90,
            spdefense: 70,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}