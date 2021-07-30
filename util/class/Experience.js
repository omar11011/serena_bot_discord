const megadb = require('megadb')

class Experience {

    constructor() {
        this.folder = new megadb.crearDB('ranking', 'data/')
        this.pointsPerLevel = 1000
        this.default = { level: 1, points: 0, latest: null }

        this.get = async user => {
            const data = await this.folder.obtener(user) || this.default
            return data
        }
        
        this.increment = async (message, user) => {
            const data = await this.get(user)

            if(data.latest != null) {
                const elapsed = Math.round((Date.now() - data.latest) / 1000)
                if(elapsed < 2) return
            }

            data.points += 1
            data.latest = Date.now()

            const limit = data.level * this.pointsPerLevel

            if(data.points >= limit) {
                data.level += 1
                data.points -= limit
                message.channel.send(`<@${user}>, ¡Felicidades, has avanzado al nivel ${data.level}!`)
            }

            this.folder.establecer(user, data)
        }
    }

}

module.exports = Experience