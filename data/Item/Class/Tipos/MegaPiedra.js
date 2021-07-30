const Base = require('../../Base')

class MegaPiedra extends Base {
    constructor() {
        super()

        this.categoria = 'Mega Piedra'
        this.precio = 100000
        this.emoji = '<:mega_df:769466408605843476>'
        this.descripcion = 'Piedra necesaria para mega evolucionar un Pokémon.'
        this.equipable = true
        this.gastable = false

        this.exec = async object => {
            return { error: true, errorMessage: 'Los objetos de esta categoría se usan durante los combates con el comando `mega`.' }
        }
    }
}

module.exports = MegaPiedra