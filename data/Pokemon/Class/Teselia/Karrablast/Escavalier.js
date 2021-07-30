const Base = require('./Karrablast').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 589
        this.pokemon = 'Escavalier'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.peso = 33
        this.altura = 1
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('doble ataque'), 13],
            [move.get('ataque furia'), 16],
            [move.get('golpe cabeza'), 20],
            [move.get('falsotortazo'), 25],
            [move.get('zumbido'), 28],
            [move.get('cuchillada'), 32],
            [move.get('cabeza de hierro'), 37],
            [move.get('doble filo'), 40],
            [move.get('tijera x'), 44],
            [move.get('inversión'), 49],
            [move.get('giga impacto'), 56],
            [move.get('aguijón letal'), 60],
        ]
        this.stats = {
            hp: 70,
            attack: 135,
            defense: 105,
            spattack: 60,
            spdefense: 105,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}