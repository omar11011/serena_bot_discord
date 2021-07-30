const Base = require('../Shaymin').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Shaymin Forma Cielo'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Volador,
        ]
        this.peso = 5.2
        this.altura = 0.4
        this.evolucion = []
        this.movimientos = [
            [move.get('hoja mágica'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('don natural'), 10],
            [move.get('energibola'), 46],
            [move.get('tajo aéreo'), 64],
            [move.get('lluevehojas'), 73],
            [move.get('fogonazo'), 91],
        ]
        this.stats = {
            hp: 100,
            attack: 103,
            defense: 75,
            spattack: 120,
            spdefense: 75,
            speed: 127,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}