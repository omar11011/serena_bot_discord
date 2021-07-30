const Base = require('../Base')

class Campo extends Base {
    constructor() {
        super()

        this.nombre = 'Campo'
        this.descripcion = 'Son Pokémon que viven aislados de todo contacto humano en zonas inhóspitas, como desiertos; aunque suelen ser vistos en las zonas donde salen a comer o recargarse. En su mayoría, son de tipo tierra.'
    }
}

module.exports = new Campo()