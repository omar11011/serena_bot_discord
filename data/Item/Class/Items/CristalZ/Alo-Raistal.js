const Cristal = require('../../Tipos/CristalZ')

class AloRaistal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Alo-Raistal Z'
        this.movimiento = 'Surfeo Galvánico'
        this.emoji = '<:aloraistal:767982580821131264>'
        this.descripcion = `Alolan Raichu podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new AloRaistal()