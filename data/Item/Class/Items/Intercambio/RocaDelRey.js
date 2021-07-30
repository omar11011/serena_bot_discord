const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Roca del Rey'
        this.emoji = '<:king_rock:744677329602871498>'
        this.descripcion = 'Equípaselo a Poliwhirl o Slowpoke antes de intercambiarlo para que evolucione en Politoed o Slowking respectivamente.'
    }
}

module.exports = new Objeto()