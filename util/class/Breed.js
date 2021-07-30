const megadb = require('megadb')

class Breed {

    constructor(server, user) {
        this.server = server
        this.user = user

        this.folderEgg = new megadb.crearDB('egg', 'breed')
        this.folderServer = new megadb.crearDB('server', 'breed')

        this.dataEgg = async () => {
            const data = await this.folderEgg.obtener(this.user) || []
            return data
        }

        this.dataServer = async () => {
            const data = await this.folderServer.obtener(this.server) || { verify: false, time: 0 }
            return data
        }

        this.verify = async (option = true) => {
            const data = await this.dataServer()
            if(data.verify == option) return false

            data.verify = option
            this.folderServer.establecer(this.server, data)
            return true
        }
    }

}

module.exports = Breed