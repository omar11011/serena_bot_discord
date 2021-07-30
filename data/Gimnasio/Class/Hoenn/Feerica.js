const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Feérica'
        this.lider = 'Petra'
        this.medalla = this.medal.get('Medalla Piedra')
        this.pokemon = [
            'Probopass',
            'Armaldo',
            'Lapras Volcánico',
            'Aggron',
            'Carracosta',
            'Golem',
        ]
    }
}

module.exports = new Gym()