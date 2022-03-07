class Command {

    constructor() {
        // Atributos
        this.nombre = 'test'
        this.alias = []
        this.cooldown = 3
        this.description = null
        this.ignoreCooldown = false
        this.enabled = true
        this.ownerOnly = false
        this.guildOnly = true
        this.userPermissions = []
        this.botPermissions = ['MANAGE_MESSAGES']
        this.uses = []
        this.ignoreCaptcha = true
        
        // Módulos
        this.log = require('./Log')
        this.client = require('./Client')
        this.duel = require('./Duel')
        this.trade = require('./Trade')
        this.bj = require('./Blackjack')
        this.breed = require('./Breed')
        this.db = require('../../server/models')

        // Métodos
        this.sendEmbed = require('../functions/sendEmbed')
        this.sendPagination = require('../functions/sendPagination')
        this.findUser = require('../functions/findUser')
        this.capitalize = require('../functions/capitalize')
        this.pokemon = require('../Pokemon')
        this.item = require('../Item')
        this.movement = require('../Movement')
        this.medal = require('../Medal')

        // Data
        this.ranks = ['User', 'Helper', 'Alto Mando', 'Administración', 'Propietario']

        this.getOwner = message => {
            const user = message.guild.members.cache.get(this.client.config.bot.owner[0])
            return user ? user.user : { id: this.client.config.bot.owner[0], username: 'Omar', tag: 'Omar' }
        }

        this.captcha = require('./Captcha')
    }

}

module.exports = Command