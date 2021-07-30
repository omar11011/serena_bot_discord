const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 672
        this.pokemon = 'Skiddo'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 31
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gogoat', 32),
        ]
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('hoja afilada'), 13],
            [move.get('derribo'), 22],
            [move.get('terratemblor'), 26],
            [move.get('bomba germen'), 30],
            [move.get('doble filo'), 38],
            [move.get('asta drenaje'), 42],
            [move.get('hoja aguda'), 45],
        ]
        this.stats = {
            hp: 66,
            attack: 65,
            defense: 48,
            spattack: 62,
            spdefense: 57,
            speed: 52,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}