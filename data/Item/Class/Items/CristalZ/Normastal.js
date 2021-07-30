const Cristal = require('../../Tipos/CristalZ')

class Normastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Normastal Z'
        this.movimiento = 'Carrera Arrolladora'
        this.emoji = '<:normastal:767982582029484034>'
        this.descripcion = `Los Pokémon de tipo normal podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Normastal()