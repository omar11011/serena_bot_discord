const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 152
        this.pokemon = 'Chikorita'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 6.4
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bayleef', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja afilada'), 6],
            [move.get('hoja mágica'), 20],
            [move.get('don natural'), 23],
            [move.get('golpe cuerpo'), 34],
            [move.get('rayo solar'), 45],
        ]
        this.stats = {
            hp: 45,
            attack: 49,
            defense: 65,
            spattack: 49,
            spdefense: 64,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}