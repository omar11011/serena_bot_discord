const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Lazo Destino'
        this.emoji = ''
        this.precio = 500
        this.metodo = 'Gemas'
        this.transferible = false
        this.vendible = false
        this.gastable = false
        this.descripcion = 'La cría heredará las fortalezas individuales de 5 de las 12 estadísticas de los padres (6 pertenecen a cada padre, 12 en total).'
    }
}

module.exports = new Objeto()