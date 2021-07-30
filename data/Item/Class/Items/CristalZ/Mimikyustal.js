const Cristal = require('../../Tipos/CristalZ')

class Mimikyustal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Mimikyustal Z'
        this.movimiento = 'Somanta Amistosa'
        this.emoji = '<:mimikyustal:767982583928717312>'
        this.descripcion = `Mimikyu podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Mimikyustal()