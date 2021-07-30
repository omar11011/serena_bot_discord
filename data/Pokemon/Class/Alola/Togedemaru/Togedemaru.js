const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 777
        this.pokemon = 'Togedemaru'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 3.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 1],
            [move.get('desenrollar'), 9],
            [move.get('chispa'), 17],
            [move.get('moflete estático'), 21],
            [move.get('chispazo'), 29],
            [move.get('electropunzada'), 33],
            [move.get('voltio cruel'), 41],
            [move.get('pin misil'), 45],
            [move.get('aguijón letal'), 53],
        ]
        this.stats = {
            hp: 65,
            attack: 98,
            defense: 63,
            spattack: 40,
            spdefense: 73,
            speed: 96,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}