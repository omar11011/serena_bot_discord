const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Novarte'
        this.lider = 'Violeta'
        this.medalla = this.medal.get('Medalla Insecto')
        this.pokemon = [
            'Masquerain',
            'Vivillon',
            'Butterfree',
            'Scizor',
            'Pinsir',
            'Heracross',
        ]
    }
}

module.exports = new Gym()