const Cristal = require('../../Tipos/CristalZ')

class Litostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Litostal Z'
        this.movimiento = 'Aplastamiento Gigalítico'
        this.emoji = '<:litostal:767982582292807710>'
        this.descripcion = `Los Pokémon de tipo roca podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Litostal()