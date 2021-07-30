const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Canal'
        this.lider = 'Acerón'
        this.medalla = this.medal.get('Medalla Mina')
        this.pokemon = [
            'Bastiodon',
            'Aggron',
            'Excadrill',
            'Magnezone',
            'Bronzong',
            'Forretress',
        ]
    }
}

module.exports = new Gym()