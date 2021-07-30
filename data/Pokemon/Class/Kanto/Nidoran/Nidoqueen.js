const Base = require('./Nidorina').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 31
        this.pokemon = 'Nidoqueen'
        this.peso = 60
        this.altura = 1.3
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Tierra,
        ]
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('arañazo'), 1],
            [move.get('doble patada'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('guardia baja'), 23],
            [move.get('golpe cuerpo'), 35],
            [move.get('tierra viva'), 43],
            [move.get('fuerza bruta'), 58],
        ]
        this.stats = {
            hp: 90,
            attack: 92,
            defense: 87,
            spattack: 75,
            spdefense: 86,
            speed: 76,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}