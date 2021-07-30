const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 174
        this.pokemon = 'Igglybuff'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Jigglypuff'),
        ]
        this.captura = 150
        this.amistad = 140
        this.movimientos = [
            [move.get('destructor'), 1],
        ]
        this.stats = {
            hp: 90,
            attack: 30,
            defense: 15,
            spattack: 40,
            spdefense: 20,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}