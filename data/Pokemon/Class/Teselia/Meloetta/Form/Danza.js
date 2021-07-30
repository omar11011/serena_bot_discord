const Base = require('../Meloetta').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Meloetta Forma Danza'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Lucha,
        ]
        this.color = Entidades.Color.Marrón
        this.stats = {
            hp: 100,
            attack: 128,
            defense: 90,
            spattack: 77,
            spdefense: 77,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}