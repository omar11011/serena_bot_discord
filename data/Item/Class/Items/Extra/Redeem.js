const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.nombre = 'Redeem'
        this.emoji = ''
        this.metodo = 'Gemas'
        this.precio = 250
        this.descripcion = 'Spawnea o recibe cualquier pokémon disponible con al menos 3 estadísticas al máximo.'

        this.exec = async object => {
            return { error: true, errorMessage: 'Este item se puede usar con los comandos `redeem` o `redeemspawn`.' }
        }
    }
}

module.exports = new Extra()