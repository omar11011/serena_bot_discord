const Base = require('../Zamazenta').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Zamazenta Escudo Supremo'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Acero,
        ]
        this.peso = 785
        this.evolucion = []
        this.stats = {
            hp: 92,
            attack: 130,
            defense: 145,
            spattack: 80,
            spdefense: 145,
            speed: 128,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}