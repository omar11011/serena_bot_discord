const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Celeste'
        this.lider = 'Misty'
        this.medalla = this.medal.get('Medalla Cascada')
        this.pokemon = [
            'Starmie',
            'Golduck',
            'Slowbro',
            'Seaking',
            'Lapras',
            'Blastoise',
        ]
    }
}

module.exports = new Gym()