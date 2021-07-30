const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 470
        this.pokemon = 'Leafeon'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 25.5
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Leafeon', item.get('leafeonita')),
            new Entidades.Evolucion.Gigamax('Leafeon Gigamax'),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja afilada'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('hoja mágica'), 20],
            [move.get('gigadrenado'), 25],
            [move.get('hierba lazo'), 39],
            [move.get('última baza'), 41],
            [move.get('hoja aguda'), 45],
        ]
        this.stats = {
            hp: 65,
            attack: 110,
            defense: 130,
            spattack: 60,
            spdefense: 65,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}