const Base = require('./Cascoon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 269
        this.pokemon = 'Dustox'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Veneno,
        ]
        this.peso = 31.6
        this.altura = 1.2
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('picadura'), 1],
            [move.get('confusión'), 12],
            [move.get('carga tóxica'), 20],
            [move.get('psicorrayo'), 22],
            [move.get('viento plata'), 25],
            [move.get('zumbido'), 35],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 70,
            spattack: 50,
            spdefense: 90,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}