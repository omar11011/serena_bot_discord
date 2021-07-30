const Cristal = require('../../Tipos/CristalZ')

class Insectostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Insectostal Z'
        this.movimiento = 'Guadaña Sedosa'
        this.emoji = '<:insectostal:767982581303738389>'
        this.descripcion = `Los Pokémon de tipo bicho podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Insectostal()