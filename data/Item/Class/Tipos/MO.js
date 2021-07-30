const Máquina = require('./Máquina')

class MáquinaOculta extends Máquina {
    constructor() {
        super()
        
        this.tipo = 'Máquina Oculta'
    }
}

module.exports = MáquinaOculta