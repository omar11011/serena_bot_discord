const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Prisma Azul'
        this.precio = 175000
        this.emoji = '<:blue_orb:769464985020530719>'
    }
}

module.exports = new Mega()