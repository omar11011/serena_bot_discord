const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Marina'
        this.lider = 'Lana'
        this.medalla = this.medal.get('Medalla Unión')
        this.pokemon = [
            'Kyogre',
            'Primarina',
            'Vaporeon',
            'Gyarados',
            'Suicune',
            'Poliwrath',
        ]
    }
}

module.exports = new Gym()