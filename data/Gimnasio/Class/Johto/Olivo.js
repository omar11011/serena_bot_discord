const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Olivo'
        this.lider = 'Yasmina'
        this.medalla = this.medal.get('Medalla Mineral')
        this.pokemon = [
            'Steelix',
            'Magnezone',
            'Skarmory',
            'Metagross',
            'Lucario',
            'Excadrill',
        ]
    }
}

module.exports = new Gym()