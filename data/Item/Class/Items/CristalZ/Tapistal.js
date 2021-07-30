const Cristal = require('../../Tipos/CristalZ')

class Tapistal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Tapistal Z'
        this.movimiento = 'Cólera del Guardián'
        this.emoji = '<:tapistal:767982582314041354>'
        this.descripcion = `Los Tapus podrán usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Tapistal()