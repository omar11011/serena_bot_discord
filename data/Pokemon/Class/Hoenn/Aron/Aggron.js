const Base = require('./Lairon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 306
        this.pokemon = 'Aggron'
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Roca,
        ]
        this.peso = 360
        this.altura = 2.1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Aggron', item.get('aggronita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('bofetón lodo'), 4],
            [move.get('golpe cabeza'), 7],
            [move.get('garra metal'), 10],
            [move.get('tumba rocas'), 13],
            [move.get('cabeza de hierro'), 22],
            [move.get('avalancha'), 25],
            [move.get('derribo'), 29],
            [move.get('cola férrea'), 35],
            [move.get('doble filo'), 45],
            [move.get('cuerpo pesado'), 57],
        ]
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 180,
            spattack: 60,
            spdefense: 60,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}