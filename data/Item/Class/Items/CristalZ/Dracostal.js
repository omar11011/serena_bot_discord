const Cristal = require('../../Tipos/CristalZ')

class Dracostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Dracostal Z'
        this.movimiento = 'Dracoaliento Devastador'
        this.emoji = '<:dracostal:767982580867661825>'
        this.descripcion = `Los Pokémon de tipo dragón podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Dracostal()