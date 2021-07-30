const megadb = require('megadb')
const exec = require('child_process').exec

class Bj {

    constructor(user) {
        this.user = user
        this.folder = new megadb.crearDB(this.user, 'bj/')

        this.inGame = async () => {
            const data = await this.folder.obtener('data')
            return data
        }

        this.end = () => {
            this.folder.eliminar('data')
            this.deleteJSON()
        }

        this.deleteJSON = () => {
            exec('rm app/mega_databases/bj/' + this.user + '.json', async (err, stdout, stderr) => {
                if(err) return console.log(err)
            })
        }

        this.create = (amount, trainerId) => {
            this.folder.establecer('data', {
                user: { trainerId: trainerId, amount: amount, points: 0 },
                botPoints: 0,
                gameTurn: 0,
            })
        }

        this.random = (min = 1, max = 10) => {
            return min + Math.ceil(Math.random() * (max - min))
        }
    }

}

module.exports = Bj