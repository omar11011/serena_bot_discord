const Cristal = require('../../Tipos/CristalZ')

class Nictostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Nictostal Z'
        this.movimiento = 'Agujero Negro Aniquilador'
        this.emoji = '<:nictostal:767982585158434876>'
        this.descripcion = `Los Pokémon de tipo siniestro podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Nictostal()