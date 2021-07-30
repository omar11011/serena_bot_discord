const Cristal = require('../../Tipos/CristalZ')

class Geostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Geostal Z'
        this.movimiento = 'Barrena Telúrica'
        this.emoji = '<:geostal:767982581555658752>'
        this.descripcion = `Los Pokémon de tipo tierra podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Geostal()