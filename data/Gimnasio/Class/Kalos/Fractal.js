const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Fractal'
        this.lider = 'Edel'
        this.medalla = this.medal.get('Medalla Iceberg')
        this.pokemon = [
            'Abomasnow',
            'Cryogonal',
            'Weavile',
            'Avalugg',
            'Glalie',
            'Vanilluxe',
        ]
    }
}

module.exports = new Gym()