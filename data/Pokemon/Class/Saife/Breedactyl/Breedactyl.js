const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 906
        this.pokemon = 'Breedactyl'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 17
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Aerodactyl', 25),
        ]
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('ataque ala'), 1],
            [move.get('mordisco'), 1],
            [move.get('poder pasado'), 24],
            [move.get('triturar'), 30],
            [move.get('derribo'), 35],
            [move.get('caída libre'), 37],
            [move.get('cabeza de hierro'), 42],
            [move.get('hiperrayo'), 50],
            [move.get('avalancha'), 65],
            [move.get('giga impacto'), 71],
        ]
        this.stats = {
            hp: 60,
            attack: 80,
            defense: 40,
            spattack: 40,
            spdefense: 50,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}