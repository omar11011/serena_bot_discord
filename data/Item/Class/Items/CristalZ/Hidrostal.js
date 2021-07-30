const Cristal = require('../../Tipos/CristalZ')

class Hidrostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Hidrostal Z'
        this.movimiento = 'Hidrovórtice Abisal'
        this.emoji = '<:hidrostal:767982581387362304>'
        this.descripcion = `Los Pokémon de tipo agua podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Hidrostal()