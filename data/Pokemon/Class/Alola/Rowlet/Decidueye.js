const Base = require('./Dartrix').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 724
        this.pokemon = 'Decidueye'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 36.6
        this.altura = 1.6
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('follaje'), 1],
            [move.get('picotazo'), 8],
            [move.get('impresionar'), 11],
            [move.get('hoja afilada'), 14],
            [move.get('viento aciago'), 16],
            [move.get('picoteo'), 24],
            [move.get('ataque furia'), 33],
            [move.get('sombra vil'), 34],
            [move.get('lluevehojas'), 34],
            [move.get('golpe bajo'), 38],
            [move.get('hoja aguda'), 44],
            [move.get('puntada sombría'), 50],
            [move.get('pájaro osado'), 55],
            [move.get('golpe fantasma'), 60],
        ]
        this.stats = {
            hp: 78,
            attack: 107,
            defense: 75,
            spattack: 100,
            spdefense: 100,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}