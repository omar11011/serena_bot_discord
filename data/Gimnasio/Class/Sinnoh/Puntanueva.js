const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Puntaneva'
        this.lider = 'Inverna'
        this.medalla = this.medal.get('Medalla Carámbano')
        this.pokemon = [
            'Froslass',
            'Glaceon',
            'Abomasnow',
            'Mamoswine',
            'Glalie',
            'Weavile',
        ]
    }
}

module.exports = new Gym()