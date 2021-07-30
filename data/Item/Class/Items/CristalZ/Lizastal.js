const Cristal = require('../../Tipos/CristalZ')

class Lizastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Lizastal Z'
        this.movimiento = 'Ráfaga Demoledora'
        this.emoji = '<:lizastal:767982582326362112>'
        this.descripcion = `Los Pokémon de tipo lucha podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Lizastal()