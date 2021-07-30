const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Ladera 2'
        this.lider = 'Judith'
        this.medalla = this.medal.get('Medalla Lucha')
        this.pokemon = [
            'Grapploct',
            'Hawlucha',
            "Sirfetch'd",
            'Falinks',
            'Machamp',
            'Pangoro',
        ]
    }
}

module.exports = new Gym()