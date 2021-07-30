const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Corazón'
        this.lider = 'Fantina'
        this.medalla = this.medal.get('Medalla Reliquia')
        this.pokemon = [
            'Gengar',
            'Banette',
            'Lopunny de Saife',
            'Marshadow',
            'Spiritomb',
            'Dusknoir',
        ]
    }
}

module.exports = new Gym()