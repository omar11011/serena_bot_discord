const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 187
        this.pokemon = 'Hoppip'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 0.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Skiploom', 18)
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 10],
            [move.get('recurrente'), 19],
            [move.get('megaagotar'), 25],
            [move.get('acróbata'), 28],
            [move.get('gigadrenado'), 43],
            [move.get('bote'), 46],
        ]
        this.stats = {
            hp: 35,
            attack: 35,
            defense: 40,
            spattack: 35,
            spdefense: 55,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}