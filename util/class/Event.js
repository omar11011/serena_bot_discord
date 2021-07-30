class Event {

    constructor() {
        // Atributos
        this.nombre = null

        // Móulos
        this.log = require('./Log')
        this.client = require('./Client')
        this.server = require('./Server')
        this.db = require('../../server/models')

        // Métodos
        this.sendEmbed = require('../functions/sendEmbed')
        this.setPresence = require('../functions/setPresence')
        this.tempBan = require('../functions/tempBan')
    }

}

module.exports = Event