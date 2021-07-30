const Base = require('./Cascoon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 267
        this.pokemon = 'Beautifly'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.peso = 28.4
        this.altura = 1
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('picadura'), 1],
            [move.get('tornado'), 10],
            [move.get('absorber'), 12],
            [move.get('aire afilado'), 20],
            [move.get('megaagotar'), 22],
            [move.get('viento plata'), 25],
            [move.get('gigadrenado'), 32],
            [move.get('zumbido'), 35],
            [move.get('furia'), 37],
        ]
        this.stats = {
            hp: 60,
            attack: 70,
            defense: 50,
            spattack: 100,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}