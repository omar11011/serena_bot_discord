const Base = require('../Burmy').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Burmy Tronco Arena'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Tierra,
        ]
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Wormadam Tronco Arena', 20, true),
            new Entidades.Evolucion.Nivel('Mothim', 20, false),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}