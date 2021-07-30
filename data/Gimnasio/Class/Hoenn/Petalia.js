const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Petalia'
        this.lider = 'Norman'
        this.medalla = this.medal.get('Medalla Equilibrio')
        this.pokemon = [
            'Slaking',
            'Snorlax',
            'Kangaskhan',
            'Staraptor',
            'Zangoose',
            'Tauros',
        ]
    }
}

module.exports = new Gym()