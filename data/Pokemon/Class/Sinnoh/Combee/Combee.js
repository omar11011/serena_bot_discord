const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 415
        this.pokemon = 'Combee'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vespiquen', 21, true),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('picadura'), 13],
            [move.get('zumbido'), 29],
        ]
        this.stats = {
            hp: 30,
            attack: 30,
            defense: 42,
            spattack: 30,
            spdefense: 42,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}