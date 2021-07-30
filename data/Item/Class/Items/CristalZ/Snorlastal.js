const Cristal = require('../../Tipos/CristalZ')

class Snorlastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Snorlastal Z'
        this.movimiento = 'Arrojo Intempestivo'
        this.emoji = '<:snorlastal:767982582309584896>'
        this.descripcion = `Snorlax podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Snorlastal()