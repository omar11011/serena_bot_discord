const Cristal = require('../../Tipos/CristalZ')

class Fitostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Fitostal Z'
        this.movimiento = 'Megatón Floral'
        this.emoji = '<:fitostal:767982581097562113>'
        this.descripcion = `Los Pokémon de tipo planta podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Fitostal()