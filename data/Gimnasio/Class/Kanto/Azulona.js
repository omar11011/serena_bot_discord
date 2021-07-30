const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Azulona'
        this.lider = 'Erika'
        this.medalla = this.medal.get('Medalla Arcoíris')
        this.pokemon = [
            'Vileplume',
            'Venusaur',
            'Cradily',
            'Exeggutor',
            'Tangrowth',
            'Abomasnow',
        ]
    }
}

module.exports = new Gym()