const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 304
        this.pokemon = 'Aron'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 60
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lairon', 32),
        ]
        this.captura = 180
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('bofetón lodo'), 4],
            [move.get('golpe cabeza'), 7],
            [move.get('garra metal'), 10],
            [move.get('tumba rocas'), 13],
            [move.get('cabeza de hierro'), 22],
            [move.get('avalancha'), 25],
            [move.get('derribo'), 29],
            [move.get('cola férrea'), 34],
            [move.get('doble filo'), 40],
            [move.get('cuerpo pesado'), 46],
        ]
        this.stats = {
            hp: 50,
            attack: 70,
            defense: 100,
            spattack: 40,
            spdefense: 40,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}