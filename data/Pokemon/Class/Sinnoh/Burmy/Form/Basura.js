const Base = require('../Burmy').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Burmy Tronco Basura'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Wormadam Tronco Basura', 20, true),
            new Entidades.Evolucion.Nivel('Mothim', 20, false),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}