const Cristal = require('../../Tipos/CristalZ')

class Pikastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Pikastal Z'
        this.movimiento = 'Pikavoltio Letal'
        this.emoji = '<:pikastal:767982582314434570>'
        this.descripcion = `Pikachu podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Pikastal()