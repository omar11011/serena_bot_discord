const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 285
        this.pokemon = 'Shroomish'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 4.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Breloom', 23),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('placaje'), 1],
            [move.get('megaagotar'), 12],
            [move.get('golpe cabeza'), 15],
            [move.get('gigadrenado'), 26],
            [move.get('bomba germen'), 36],
        ]
        this.stats = {
            hp: 60,
            attack: 40,
            defense: 60,
            spattack: 40,
            spdefense: 60,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}