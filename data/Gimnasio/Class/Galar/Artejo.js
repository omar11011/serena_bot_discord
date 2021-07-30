const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Artejo'
        this.lider = 'Roy'
        this.medalla = this.medal.get('Medalla Draco')
        this.pokemon = [
            'Duraludon',
            'Flygon',
            'Goodra',
            'Turtonator',
            'Arcanine',
            'Palkia',
        ]
    }
}

module.exports = new Gym()