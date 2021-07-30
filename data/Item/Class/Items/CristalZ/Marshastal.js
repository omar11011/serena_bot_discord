const Cristal = require('../../Tipos/CristalZ')

class Marshastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Marshastal Z'
        this.movimiento = 'Constelación Roba Almas'
        this.emoji = '<:marshadium:761530372537712641>'
        this.descripcion = `Marshadow podrá usar su movimiento ${this.movimiento}.`
        this.equipable = true
    }
}

module.exports = new Marshastal()