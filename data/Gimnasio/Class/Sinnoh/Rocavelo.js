const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Rocavelo'
        this.lider = 'Brega'
        this.medalla = this.medal.get('Medalla Adoquín')
        this.pokemon = [
            'Lucario',
            'Medicham',
            'Machamp',
            'Lopunny de Saife',
            'Gallade',
            'Infernape',
        ]
    }
}

module.exports = new Gym()