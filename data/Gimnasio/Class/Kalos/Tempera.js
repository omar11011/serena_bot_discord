const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Témpera'
        this.lider = 'Amaro'
        this.medalla = this.medal.get('Medalla Hoja')
        this.pokemon = [
            'Jumpluff',
            'Gogoat',
            'Victreebel',
            'Ludicolo',
            'Venusaur',
            'Chesnaught',
        ]
    }
}

module.exports = new Gym()