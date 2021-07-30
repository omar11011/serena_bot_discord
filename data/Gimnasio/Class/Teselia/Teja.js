const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Teja'
        this.lider = 'Junco'
        this.medalla = this.medal.get('Medalla Candelizo')
        this.pokemon = [
            'Cryogonal',
            'Beartic',
            'Vanilluxe',
            'Weavile',
            'Walrein',
            'Abomasnow',
        ]
    }
}

module.exports = new Gym()