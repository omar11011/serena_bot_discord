const Base = require('../Mew').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Ecomew'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Planta,
        ]
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Mew', item.get('mewita')),
        ]
        this.captura = 3
        this.movimientos = [
            [move.get('mega puño'), 1],
            [move.get('tormenta floral'), 10],
            [move.get('psíquico'), 30],
            [move.get('sincorruido'), 50],
            [move.get('rayo solar'), 100],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}