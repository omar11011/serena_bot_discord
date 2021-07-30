const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Prisma Jade'
        this.precio = 175000
    }
}

module.exports = new Mega()