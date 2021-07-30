const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 710
        this.pokemon = 'Pumpkaboo'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gourgeist'),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('hoja afilada'), 16],
            [move.get('recurrente'), 26],
            [move.get('sombra vil'), 30],
            [move.get('bola sombra'), 36],
            [move.get('bomba germen'), 48],
        ]
        this.stats = {
            hp: 49,
            attack: 66,
            defense: 70,
            spattack: 44,
            spdefense: 55,
            speed: 51,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}