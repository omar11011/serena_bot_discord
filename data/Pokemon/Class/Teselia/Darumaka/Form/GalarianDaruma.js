const Base = require('./GalarianDarmanitan').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokemon = 'Darmanitan de Galar Modo Daruma'
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Fuego,
        ]
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 160,
            defense: 55,
            spattack: 30,
            spdefense: 55,
            speed: 135,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}