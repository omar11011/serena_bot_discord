const Cristal = require('../../Tipos/CristalZ')

class Electrostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Electrostal Z'
        this.movimiento = 'Gigavoltio Destructor'
        this.emoji = '<:electrostal:767982581337161738>'
        this.descripcion = `Los Pokémon de tipo eléctrico podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Electrostal()