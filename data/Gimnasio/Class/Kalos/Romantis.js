const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Romantis'
        this.lider = 'Valeria'
        this.medalla = this.medal.get('Medalla Hada')
        this.pokemon = [
            'Meloetta Forma Ídola',
            'Sylveon',
            'Weavile',
            'Gardevoir',
            'Togekiss',
            'Xerneas',
        ]
    }
}

module.exports = new Gym()