const Cristal = require('../../Tipos/CristalZ')

class Lycanrocstal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Lycanrocstal Z'
        this.movimiento = 'Tempestad Rocosa'
        this.emoji = '<:lycanrostal:767982581916237884>'
        this.descripcion = `Lycanroc podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Lycanrocstal()