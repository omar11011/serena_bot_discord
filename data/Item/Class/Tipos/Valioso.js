const Base = require('../../Base')

class Item extends Base {
    constructor() {
        super()

        this.categoria = 'Objeto Valioso'
        this.accesible = false
        this.descripcion = `Objeto valioso que se puede encontrar minando.`
        this.vendible = true

        this.exec = async object => {
            return { error: true, errorMessage: 'Los objetos de esta categoría se pueden vender con el comando `sell`.' }
        }
    }
}

module.exports = Item