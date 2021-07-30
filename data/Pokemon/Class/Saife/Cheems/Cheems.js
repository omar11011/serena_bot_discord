const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = '903'
        this.pokemon = 'Cheems'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 20
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cheems Mamado', 80),
        ]
        this.captura = 3
        this.amistad = 140
        this.movimientos = [
            [move.get('amnsiedad'), 1]
        ]
        this.stats = {
            hp: 100,
            attack: 90,
            defense: 30,
            spattack: 10,
            spdefense: 30,
            speed: 10,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}