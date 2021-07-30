const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.nombre = 'Boost'
        this.emoji = ''
        this.metodo = 'Gemas'
        this.precio = 300
        this.descripcion = 'Añade otro canal de spawn extra en algún servidor o especializa los canales por categoría.'

        this.exec = async object => {
            const result = { error: false }
            const boost = await object.server.getBoost()
            const spawns = await object.server.getTypeChannel('spawn')

            if(spawns.length + boost + 1 > 8) {
                result.error = true
                result.errorMessage = 'Este servidor ya ha alcanzado el límite de boosts.'
            } else {
                object.server.folder.establecer('boost', boost + 1)
                result.embed = {
                    description: 'Has otorgado un boost al servidor, ahora podrán tener otro canal más de spawn.'
                }
            }

            return result
        }
    }
}

module.exports = new Extra()