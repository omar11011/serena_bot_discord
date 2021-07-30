const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Caoba'
        this.lider = 'Fredo'
        this.medalla = this.medal.get('Medalla Glaciar')
        this.pokemon = [
            'Mamoswine',
            'Jynx',
            'Cloyster',
            'Dewgong',
            'Lapras',
            'Weavile',
        ]
    }
}

module.exports = new Gym()