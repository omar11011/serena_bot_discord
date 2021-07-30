const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Caolín'
        this.lider = 'Iris'
        this.medalla = this.medal.get('Medalla Leyenda')
        this.pokemon = [
            'Hydreigon',
            'Salamence',
            'Haxorus',
            'Lapras',
            'Druddigon',
            'Aggron',
        ]
    }
}

module.exports = new Gym()