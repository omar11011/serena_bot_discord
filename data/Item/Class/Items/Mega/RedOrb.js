const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Prisma Rojo'
        this.precio = 175000
        this.emoji = '<:red_orb:769464965806424074>'
    }
}

module.exports = new Mega()