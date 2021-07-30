const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Ladera 1'
        this.lider = 'Alistair'
        this.medalla = this.medal.get('Medalla Fantasma')
        this.pokemon = [
            'Gengar',
            'Dusknoir',
            'Runerigus',
            'Cursola',
            'Mimikyu',
            'Lopunny de Saife',
        ]
    }
}

module.exports = new Gym()