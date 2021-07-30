const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 191
        this.pokemon = 'Sunkern'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.8
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Item('Sunflora', item.get('piedra solar'))
        ]
        this.captura = 235
        this.amistad = 70
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('megaagotar'), 10],
            [move.get('hoja afilada'), 16],
            [move.get('gigadrenado'), 22],
            [move.get('esfuerzo'), 25],
            [move.get('rayo solar'), 34],
            [move.get('doble filo'), 37],
            [move.get('bomba germen'), 43],
        ]
        this.stats = {
            hp: 30,
            attack: 30,
            defense: 30,
            spattack: 30,
            spdefense: 30,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}