const Cristal = require('../../Tipos/CristalZ')

class Kommostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Kommostal Z'
        this.movimiento = 'Estruendo Implacable'
        this.emoji = '<:kommostal:767982582759030834>'
        this.descripcion = `Kommo-o podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Kommostal()