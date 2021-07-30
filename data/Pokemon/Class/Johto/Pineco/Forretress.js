const Base = require('./Pineco').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 205
        this.pokemon = 'Forretress'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.peso = 125.8
        this.altura = 1.2
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('disparo espejo'), 1],
            [move.get('picadura'), 9],
            [move.get('derribo'), 12],
            [move.get('giro rápido'), 17],
            [move.get('don natural'), 23],
            [move.get('vendetta'), 32],
            [move.get('giro bola'), 46],
            [move.get('doble filo'), 50],
            [move.get('electrocañón'), 60],
            [move.get('cuerpo pesado'), 64],
        ]
        this.stats = {
            hp: 75,
            attack: 90,
            defense: 140,
            spattack: 60,
            spdefense: 60,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}