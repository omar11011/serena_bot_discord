const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Iris'
        this.lider = 'Morti'
        this.medalla = this.medal.get('Medalla Niebla')
        this.pokemon = [
            'Gengar',
            'Banette',
            'Lopunny de Saife',
            'Chandelure',
            'Dusknoir',
            'Lapras',
        ]
    }
}

module.exports = new Gym()