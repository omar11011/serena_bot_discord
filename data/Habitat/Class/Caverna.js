const Base = require('../Base')

class Caverna extends Base {
    constructor() {
        super()

        this.nombre = 'Caverna'
        this.descripcion = 'Habitan en cuevas, siempre aislados; necesitan de la oscuridad, y no son usualmente vistos en la hierba.'
    }
}

module.exports = new Caverna()