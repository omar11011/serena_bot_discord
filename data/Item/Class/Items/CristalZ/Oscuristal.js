const Cristal = require('../../Tipos/CristalZ')

class Oscuristal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Oscuristal Z'
        this.movimiento = 'Tempestad Demoniaca'
        this.emoji = ''
        this.descripcion = `Los Pokémon de tipo oscuro podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Oscuristal()