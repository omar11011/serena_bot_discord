const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 755
        this.pokemon = 'Morelull'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.5
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Shiinotic', 24),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 4],
            [move.get('megaagotar'), 15],
            [move.get('gigadrenado'), 29],
            [move.get('fuerza lunar'), 39],
            [move.get('come sueños'), 43],
        ]
        this.stats = {
            hp: 40,
            attack: 35,
            defense: 55,
            spattack: 65,
            spdefense: 75,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}