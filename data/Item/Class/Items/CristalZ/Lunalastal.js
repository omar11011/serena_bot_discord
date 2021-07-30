const Cristal = require('../../Tipos/CristalZ')

class Lunalastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Lunalastal Z'
        this.movimiento = 'Deflagración Lunar'
        this.emoji = '<:lunastal:767982583291576322>'
        this.descripcion = `Lunala podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Lunalastal()