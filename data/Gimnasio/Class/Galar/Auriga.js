const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Auriga'
        this.lider = 'Morris'
        this.medalla = this.medal.get('Medalla Hielo')
        this.pokemon = [
            'Frosmoth',
            'Darmanitan de Galar',
            'Lapras',
            'Abomasnow',
            'Mr. Rime',
            'Eiscue',
        ]
    }
}

module.exports = new Gym()