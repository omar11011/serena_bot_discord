const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 252
        this.pokemon = 'Treecko'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Grovyle', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('absorber'), 5],
            [move.get('ataque rápido'), 9],
            [move.get('megaagotar'), 13],
            [move.get('persecución'), 17],
            [move.get('gigadrenado'), 21],
            [move.get('atizar'), 29],
            [move.get('energibola'), 37],
            [move.get('esfuerzo'), 45],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 35,
            spattack: 65,
            spdefense: 55,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}