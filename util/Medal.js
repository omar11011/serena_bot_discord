class Medal {

    constructor() {
        this.data = require('../data/Medalla')
        this.db = require('../server/models')

        this.get = nombre => {
            nombre = nombre.trim().toLowerCase()
            let result = false
            this.data.map(e => {
                if(nombre == e.nombre.toLowerCase()) result = e
            })
            return result
        }

        this.getCategory = category => {
            category = category.trim().toLowerCase()
            const result = []
            this.data.map(e => {
                if(category == e.tipo.toLowerCase()) result.push(e)
            })
            if(result.length == 0) return false
            else return result
        }

        this.set = async (medal, trainerId) => {
            await this.db.medal.create({ medal: medal.trim(), date: new Date(), trainerId: trainerId })
                .then(() => {
                    return true
                })
                .catch(err => {
                    return console.log(err)
                })
        }
    }

}

module.exports = new Medal()