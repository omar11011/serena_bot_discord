const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Fluxus'
        this.lider = 'Astrid'
        this.medalla = this.medal.get('Medalla Psique')
        this.pokemon = [
            'Meowstic',
            'Slowking',
            'Sigilyph',
            'Alakazam',
            'Meloetta Forma Ídola',
            'Cresselia',
        ]
    }
}

module.exports = new Gym()