const Cristal = require('../../Tipos/CristalZ')

class Toxistal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Toxistal Z'
        this.movimiento = 'Diluvio Corrosivo'
        this.emoji = '<:toxistal:767982582422831124>'
        this.descripcion = `Los Pokémon de tipo veneno podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Toxistal()