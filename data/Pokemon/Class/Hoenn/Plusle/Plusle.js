const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 311
        this.pokemon = 'Plusle'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('moflete estático'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('chispa'), 7],
            [move.get('rapidez'), 16],
            [move.get('bola voltio'), 19],
            [move.get('chispazo'), 31],
            [move.get('última baza'), 40],
            [move.get('trueno'), 43],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 40,
            spattack: 85,
            spdefense: 75,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}