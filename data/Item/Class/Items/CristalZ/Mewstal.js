const Cristal = require('../../Tipos/CristalZ')

class Mewstal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Mewstal Z'
        this.movimiento = 'Supernova Original'
        this.emoji = '<:mewstal:767982582314303509>'
        this.descripcion = `Mew podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Mewstal()