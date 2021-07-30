const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Trigal'
        this.lider = 'Blanca'
        this.medalla = this.medal.get('Medalla Planicie')
        this.pokemon = [
            'Miltank',
            'Blissey',
            'Tauros',
            'Ambipom',
            'Ursaring',
            'Lopunny',
        ]
    }
}

module.exports = new Gym()