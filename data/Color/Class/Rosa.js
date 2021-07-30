const Base = require('../Base')

class Rosa extends Base {
    constructor() {
        super()

        this.nombre = 'Rosa'
        this.hexadecimal = '#DB7093'
    }
}

module.exports = new Rosa()