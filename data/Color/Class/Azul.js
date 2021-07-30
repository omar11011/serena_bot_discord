const Base = require('../Base')

class Azul extends Base {
    constructor() {
        super()

        this.nombre = 'Azul'
        this.hexadecimal = '#3D8BFF'
    }
}

module.exports = new Azul()