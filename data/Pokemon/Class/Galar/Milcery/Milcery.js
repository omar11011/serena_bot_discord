const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 868
        this.pokemon = 'Milcery'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.3
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Alcremie', 10),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('beso drenaje'), 51],
            [move.get('brillo mágico'), 35],
        ]
        this.stats = {
            hp: 45,
            attack: 40,
            defense: 45,
            spattack: 50,
            spdefense: 61,
            speed: 34,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}