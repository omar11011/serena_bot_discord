const Cristal = require('../../Tipos/CristalZ')

class Solgaleostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Solgaleostal Z'
        this.movimiento = 'Embestida Solar'
        this.emoji = '<:solgaleostal:767982583534452747>'
        this.descripcion = `Solgaleo podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Solgaleostal()