const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Ohana'
        this.lider = 'Kiawe'
        this.medalla = this.medal.get('Medalla Honra')
        this.pokemon = [
            'Charizard',
            'Turtonator',
            'Marowak de Alola',
            'Entei',
            'Arcanine',
            'Garchomp',
        ]
    }
}

module.exports = new Gym()