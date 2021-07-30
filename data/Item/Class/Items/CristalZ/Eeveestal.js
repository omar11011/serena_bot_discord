const Cristal = require('../../Tipos/CristalZ')

class Eeveestal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Eeveestal Z'
        this.movimiento = 'Novena Potencia'
        this.emoji = '<:eeveestal:767982581269659668>'
        this.descripcion = `Eevee podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Eeveestal()