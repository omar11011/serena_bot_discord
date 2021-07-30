const config = require('../../config.json')

class Base {
    constructor() {
        this.medalla = 'Medalla'

        this.medal = require('../../util/Medal')
    }
}

module.exports = Base