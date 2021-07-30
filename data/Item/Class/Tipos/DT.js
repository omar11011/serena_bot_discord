const Máquina = require('./Máquina')

class DiscoTécnico extends Máquina {
    constructor() {
        super()
        
        this.tipo = 'Disco Técnico'
    }
}

module.exports = DiscoTécnico