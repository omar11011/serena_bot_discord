const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Endrino'
        this.lider = 'Débora'
        this.medalla = this.medal.get('Medalla Dragón')
        this.pokemon = [
            'Salamence',
            'Dragonite',
            'Garchomp',
            'Altaria',
            'Ampharos',
            'Charizard',
        ]
    }
}

module.exports = new Gym()