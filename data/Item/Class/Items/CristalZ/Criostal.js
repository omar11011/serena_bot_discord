const Cristal = require('../../Tipos/CristalZ')

class Criostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Criostal Z'
        this.movimiento = 'Crioaliento Despiadado'
        this.emoji = '<:criostal:767982580720992298>'
        this.descripcion = `Los Pokémon de tipo hielo podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Criostal()