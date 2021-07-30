const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Canela'
        this.lider = 'Blaine'
        this.medalla = this.medal.get('Medalla Volcán')
        this.pokemon = [
            'Arcanine',
            'Ninetales',
            'Magmortar',
            'Charizard',
            'Flareon',
            'Moltres',
        ]
    }
}

module.exports = new Gym()