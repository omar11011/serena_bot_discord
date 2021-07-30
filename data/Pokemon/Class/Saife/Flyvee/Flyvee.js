const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 909
        this.pokemon = 'Flyvee'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 6.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Aereon'),
            new Entidades.Evolucion.Nivel('Skyroar', 40, false),
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('cháchara'), 30],
            [move.get('última baza'), 38],
            [move.get('vuelo'), 40],
            [move.get('brillo mágico'), 45],
        ]
        this.stats = {
            hp: 40,
            attack: 70,
            defense: 40,
            spattack: 100,
            spdefense: 50,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}