const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Luminalia'
        this.lider = 'Lem'
        this.medalla = this.medal.get('Medalla Voltaje')
        this.pokemon = [
            'Magnezone',
            'Luxray',
            'Heliolisk',
            'Emolga',
            'Electivire',
            'Zapdos',
        ]
    }
}

module.exports = new Gym()