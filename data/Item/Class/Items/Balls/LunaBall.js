const Base = require('../../Tipos/Ball')

const moon = ['Nidorino', 'Nidorina', 'Nidoking', 'Nidoqueen', 'Munna', 'Musharna', 'Cleffa', 'Clefairy', 'Clefable', 'Igglybuff', 'Jigglypuff', 'Wigglytuff', 'Skitty', 'Delcatty']

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Luna Ball'
        this.precio = 200
        this.emoji = '<:luna_ball:733519892833108008>'
        this.descripcion = 'Tasa de captura 4 si el pokémon salvaje es de la familia evolutiva en la que se usa la "Piedra Lunar".'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(moon.includes(object.pokemon.db.pokemon)) return 4

            return 1
        }
    }
}

module.exports = new Item()