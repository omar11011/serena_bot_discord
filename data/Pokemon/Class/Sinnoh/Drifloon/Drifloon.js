const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 425
        this.pokemon = 'Drifloon'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 1.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Drifblim', 28),
        ]
        this.captura = 125
        this.amistad = 50
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('impresionar'), 4],
            [move.get('tornado'), 8],
            [move.get('vendetta'), 16],
            [move.get('viento aciago'), 20],
            [move.get('infortunio'), 27],
            [move.get('escupir'), 32],
            [move.get('bola sombra'), 36],
        ]
        this.stats = {
            hp: 90,
            attack: 50,
            defense: 34,
            spattack: 60,
            spdefense: 44,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}