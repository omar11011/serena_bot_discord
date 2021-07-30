const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Algaria'
        this.lider = 'Leti'
        this.medalla = this.medal.get('Medalla Mente')
        this.pokemon = [
            'Lunatone',
            'Gothitelle',
            'Claydol',
            'Xatu',
            'Bronzong',
            'Gardevoir',
        ]
    }
}

module.exports = new Gym()