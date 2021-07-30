const Cristal = require('../../Tipos/CristalZ')

class Dueyestal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Dueyestal Z'
        this.movimiento = 'Aluvión de Flechas Sombrías'
        this.emoji = '<:dueyestal:767982580891910164>'
        this.descripcion = `Decidueye podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Dueyestal()