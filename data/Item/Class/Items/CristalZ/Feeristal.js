const Cristal = require('../../Tipos/CristalZ')

class Feeristal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Feeristal Z'
        this.movimiento = 'Arrumaco Sideral'
        this.emoji = '<:feeristal:767982581291024384>'
        this.descripcion = `Los Pokémon de tipo hada podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Feeristal()