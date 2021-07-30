const Cristal = require('../../Tipos/CristalZ')

class Espectrostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Espectrostal Z'
        this.movimiento = 'Presa Espectral'
        this.emoji = '<:espectrostal:767982580921532417>'
        this.descripcion = `Los Pokémon de tipo fantasma podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Espectrostal()