const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Hoyuelo'
        this.lider = 'Percy'
        this.medalla = this.medal.get('Medalla Planta')
        this.pokemon = [
            'Shiftry',
            'Flapple',
            'Appletun',
            'Eldegoss',
            'Bellossom',
            'Venusaur',
        ]
    }
}

module.exports = new Gym()