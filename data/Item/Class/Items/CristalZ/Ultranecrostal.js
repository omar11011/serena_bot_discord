const Cristal = require('../../Tipos/CristalZ')

class Ultranecrostal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Ultranecrostal Z'
        this.movimiento = 'Fotodestrucción Apocalíptica'
        this.emoji = '<:necroztalz:761525965952122890>'
        this.descripcion = `Necrozma podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new Ultranecrostal()