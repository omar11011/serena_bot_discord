const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Tela Terrible'
        this.emoji = '<:reaper_cloth:744677339421605979>'
        this.descripcion = 'Equípaselo a Dusclops antes de intercambiarlo para que evolucione en Dusknoir.'
    }
}

module.exports = new Objeto()