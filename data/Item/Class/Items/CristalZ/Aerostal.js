const Cristal = require('../../Tipos/CristalZ')

class Aerostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Aerostal Z'
        this.movimiento = 'Picado Supersónico'
        this.emoji = '<:aerostal:767982581077508126>'
        this.descripcion = `Los Pokémon de tipo volador podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Aerostal()