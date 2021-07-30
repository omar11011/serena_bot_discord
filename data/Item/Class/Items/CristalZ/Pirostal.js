const Cristal = require('../../Tipos/CristalZ')

class Pirostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Pirostal Z'
        this.movimiento = 'Hecatombre Pírica'
        this.emoji = '<:pirostal:767982582317973514>'
        this.descripcion = `Los Pokémon de tipo fuego podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Pirostal()