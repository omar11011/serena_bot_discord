const Base = require('./Aron').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 305
        this.pokemon = 'Lairon'
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Roca,
        ]
        this.peso = 120
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Aggron', 42),
        ]
        this.captura = 90
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
            [move.get('doble filo'), 43],
            [move.get('cuerpo pesado'), 51],
        ]
        this.stats = {
            hp: 60,
            attack: 90,
            defense: 140,
            spattack: 50,
            spdefense: 50,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}