const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 133
        this.pokemon = 'Eevee'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Item('Vaporeon', item.get('piedra agua')),
            new Entidades.Evolucion.Item('Jolteon', item.get('piedra trueno')),
            new Entidades.Evolucion.Item('Flareon', item.get('piedra fuego')),
            new Entidades.Evolucion.Amistad('Espeon', 220, true),
            new Entidades.Evolucion.Amistad('Umbreon', 220, false),
            new Entidades.Evolucion.Item('Leafeon', item.get('piedra hoja')),
            new Entidades.Evolucion.Item('Glaceon', item.get('piedra hielo')),
            new Entidades.Evolucion.Movimiento('Sylveon', move.get('voz cautivadora')),
            new Entidades.Evolucion.Movimiento('Sumbreon', move.get('bola sombra')),
            new Entidades.Evolucion.Gigamax('Eevee Gigamax'),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('antojo'), 1],
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('rapidez'), 17],
            [move.get('derribo'), 25],
            [move.get('doble filo'), 37],
            [move.get('última baza'), 41],
            [move.get('as oculto'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 50,
            spattack: 45,
            spdefense: 65,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}