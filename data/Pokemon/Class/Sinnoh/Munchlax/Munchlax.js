const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 446
        this.pokemon = 'Munchlax'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 105
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Snorlax'),
        ]
        this.captura = 50
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('lengüetazo'), 12],
            [move.get('guardia baja'), 17],
            [move.get('golpe cuerpo'), 25],
            [move.get('desenrollar'), 36],
            [move.get('lanzamiento'), 41],
            [move.get('don natural'), 49],
            [move.get('última baza'), 47],
        ]
        this.stats = {
            hp: 135,
            attack: 85,
            defense: 40,
            spattack: 40,
            spdefense: 85,
            speed: 5,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}