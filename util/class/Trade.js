const megadb = require('megadb')
const db = require('../../server/models')
const exec = require('child_process').exec

class Trade {

    constructor(user) {
        this.user = user
        this.folder = new megadb.crearDB(this.user, 'trade/')

        this.inTrade = async () => {
            const data = await this.folder.obtener('data')
            return data
        }

        this.end = () => {
            this.folder.eliminar('data')
            this.deleteJSON()
        }

        this.deleteJSON = () => {
            exec('rm app/mega_databases/trade/' + this.user + '.json', async (err, stdout, stderr) => {
                if(err) return console.log(err)
            })
        }

        this.addMoney = async (give, receive) => {
            const total = receive - give
            const { trainerId } = await this.folder.obtener('data')

            if(total != 0) await db.balance.increment({ money: +total }, { where: { trainerId: trainerId } })
        }

        this.addGems = async (give, receive) => {
            const total = receive - give
            const { trainerId } = await this.folder.obtener('data')

            if(total != 0) await db.balance.increment({ gems: +total }, { where: { trainerId: trainerId } })
        }

        this.addPokemon = async obj => {
            const { trainerId } = await this.folder.obtener('data')

            for(let i = 0; i < obj.id.length; i++) {
                await db.pokemon.update({ pokemon: obj.evolve.pokemon[i], name: obj.evolve.name[i], select: false, favorite: false, trainerId: trainerId }, { where: { id: obj.id[i] } })
            }
        }
    }

}

module.exports = Trade