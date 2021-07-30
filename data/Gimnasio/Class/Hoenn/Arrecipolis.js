const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Arrecípolis'
        this.lider = 'Plubio'
        this.medalla = this.medal.get('Medalla Lluvia')
        this.pokemon = [
            'Wailord',
            'Tentacruel',
            'Ludicolo',
            'Gyarados',
            'Milotic',
            'Suicune',
        ]
    }
}

module.exports = new Gym()