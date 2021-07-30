const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 270
        this.pokemon = 'Lotad'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.6
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lombre', 14),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('absorber'), 6],
            [move.get('burbuja'), 9],
            [move.get('don natural'), 12],
            [move.get('megaagotar'), 18],
            [move.get('rayo burbuja'), 21],
            [move.get('gigadrenado'), 30],
            [move.get('cabezazo zen'), 33],
            [move.get('energibola'), 36],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 30,
            spattack: 40,
            spdefense: 50,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}