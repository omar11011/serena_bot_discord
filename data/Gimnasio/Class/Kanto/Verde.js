const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Verde'
        this.lider = 'Giovanni'
        this.medalla = this.medal.get('Medalla Tierra')
        this.pokemon = [
            'Rypherior',
            'Garchomp',
            'Krookodile',
            'Gliscor',
            'Nidoking',
            'Mewtwo',
        ]
    }
}

module.exports = new Gym()