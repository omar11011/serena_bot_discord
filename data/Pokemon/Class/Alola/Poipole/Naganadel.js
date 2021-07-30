const Base = require('./Poipole').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 804
        this.pokemon = 'Naganadel'
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 150
        this.altura = 3.6
        this.evolucion = []
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ácido'), 1],
            [move.get('ataque furia'), 7],
            [move.get('carga tóxica'), 13],
            [move.get('puya nociva'), 37],
            [move.get('aguijón letal'), 47],
            [move.get('tajo aéreo'), 53],
            [move.get('aire afilado'), 60],
            [move.get('pulso dragón'), 61],
        ]
        this.stats = {
            hp: 73,
            attack: 73,
            defense: 73,
            spattack: 127,
            spdefense: 73,
            speed: 121,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}