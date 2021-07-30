const Máquina = require('./Máquina')

class MáquinaTécnica extends Máquina {
    constructor() {
        super()
        
        this.tipo = 'Máquina Técnica'
    }
}

module.exports = MáquinaTécnica