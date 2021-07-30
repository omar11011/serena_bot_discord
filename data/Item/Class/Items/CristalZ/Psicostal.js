const Cristal = require('../../Tipos/CristalZ')

class Psicostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Psicostal Z'
        this.movimiento = 'Disruptor Psíquico'
        this.emoji = '<:psicostal:767982582343925804>'
        this.descripcion = `Los Pokémon de tipo psíquico podrán usar el movimiento ${this.movimiento}.`
    }
}

module.exports = new Psicostal()