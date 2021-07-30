class Movement {
    constructor() {
        this.data = require('../data/Movimiento')

        this.get = nombre => {
            nombre = nombre.trim().toLowerCase()
            let status = false
            this.data.map(e => {
                if(nombre == e.nombre.toLowerCase()) status = e
            })
            return status
        }
    }
}

module.exports = new Movement()