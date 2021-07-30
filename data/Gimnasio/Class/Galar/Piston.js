const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Pistón'
        this.lider = 'Naboru'
        this.medalla = this.medal.get('Medalla Fuego')
        this.pokemon = [
            'Salazzle',
            'Ninetales',
            'Centiskorch',
            'Arcanine',
            'Torkoal',
            'Moltres',
        ]
    }
}

module.exports = new Gym()