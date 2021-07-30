const Cristal = require('../../Tipos/CristalZ')

class Metalostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Metalostal Z'
        this.movimiento = 'Hélice Trepanadora'
        this.emoji = '<:metalostal:767982582293856306>'
        this.descripcion = `Los Pokémon de tipo acero podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Metalostal()