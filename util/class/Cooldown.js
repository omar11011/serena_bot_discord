const megadb = require('megadb')
const timeWait = require('../functions/timeWait')

class Cooldown {
    constructor(message, command) {
        this.message = message
        this.command = command
        this.folder = new megadb.crearDB(command.nombre, 'cooldown/')

        this.canMakeCommand = async () => {
            if(this.command.ignoreCooldown) return true

            const data = await this.folder.obtener(this.message.author.id)

            if(!data) {
                this.folder.establecer(this.message.author.id, Date.now())
                return true
            } else {
                const elapsed = Math.round((Date.now() - data) / 1000)

                if(this.command.cooldown <= elapsed) {
                    this.folder.establecer(this.message.author.id, Date.now())
                    return true
                }

                this.message.channel.send(`⏱️ ${this.message.author.username}, aún debes esperar ${timeWait(this.command.cooldown - elapsed)}.`)
                    .then(msg => {
                        setTimeout(() => {
                            msg.delete()
                        }, 3000)
                    })
            }

            return false
        }
    }
}

module.exports = Cooldown