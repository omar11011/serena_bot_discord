const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 597
        this.pokemon = 'Ferroseed'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 18.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ferrothorn', 40),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 6],
            [move.get('garra metal'), 14],
            [move.get('pin misil'), 18],
            [move.get('giro bola'), 31],
            [move.get('disparo espejo'), 40],
            [move.get('cabeza de hierro'), 43],
            [move.get('vendetta'), 47],
            [move.get('foco resplandor'), 52],
        ]
        this.stats = {
            hp: 44,
            attack: 50,
            defense: 91,
            spattack: 20,
            spdefense: 86,
            speed: 10,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}