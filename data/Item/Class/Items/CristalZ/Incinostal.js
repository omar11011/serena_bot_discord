const Cristal = require('../../Tipos/CristalZ')

class Incinostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Incinostal Z'
        this.movimiento = 'Hiperplancha Oscura'
        this.emoji = '<:incinostal:767982581354201088>'
        this.descripcion = `Incineroar podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Incinostal()