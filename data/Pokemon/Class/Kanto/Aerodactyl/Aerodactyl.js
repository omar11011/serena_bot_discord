const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 142
        this.pokemon = 'Aerodactyl'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 59
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Aerodactyl', item.get('aerodactylita')),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('ataque ala'), 1],
            [move.get('mordisco'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('poder pasado'), 25],
            [move.get('triturar'), 33],
            [move.get('derribo'), 41],
            [move.get('caída libre'), 49],
            [move.get('cabeza de hierro'), 57],
            [move.get('hiperrayo'), 65],
            [move.get('avalancha'), 73],
            [move.get('giga impacto'), 81],
        ]
        this.stats = {
            hp: 80,
            attack: 105,
            defense: 65,
            spattack: 60,
            spdefense: 75,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}