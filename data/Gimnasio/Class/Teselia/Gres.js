const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Gres'
        this.lider = 'Millo'
        this.medalla = this.medal.get('Medalla Trío')
        this.pokemon = [
            'Simisage',
            'Ferrothorn',
            'Serperior',
            'Jumpluff',
            'Whimsicott',
            'Lilligant',
        ]
    }
}

module.exports = new Gym()