const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Azuliza'
        this.lider = 'Marcial'
        this.medalla = this.medal.get('Medalla Puño')
        this.pokemon = [
            'Hariyama',
            'Scrafty',
            'Machamp',
            'Breloom',
            'Mienshao',
            'Heracross',
        ]
    }
}

module.exports = new Gym()