const Base = require('../Silvally').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Silvally Tipo Acero'
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.peso = 110
        this.altura = 2.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 125,
            defense: 125,
            spattack: 95,
            spdefense: 115,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}