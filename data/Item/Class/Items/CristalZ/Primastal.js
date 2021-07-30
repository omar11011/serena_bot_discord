const Cristal = require('../../Tipos/CristalZ')

class Primastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Primastal Z'
        this.movimiento = 'Sinfonía de la Diva Marina'
        this.emoji = '<:primastal:767982582150332417>'
        this.descripcion = `Primarina podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Primastal()