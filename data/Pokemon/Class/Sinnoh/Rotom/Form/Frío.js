const Base = require('../Rotom').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Rotom Forma Frío'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Hielo,
        ]
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('impactrueno'), 1],
            [move.get('alboroto'), 8],
            [move.get('onda voltio'), 22],
            [move.get('viento aciago'), 29],
            [move.get('ventisca'), 35],
            [move.get('bola voltio'), 43],
            [move.get('infortunio'), 50],
            [move.get('chispazo'), 64],
        ]
        this.stats = {
            hp: 55,
            attack: 65,
            defense: 107,
            spattack: 105,
            spdefense: 107,
            speed: 86,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}