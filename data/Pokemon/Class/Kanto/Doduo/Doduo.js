const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 84
        this.pokemon = 'Doduo'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 39.2
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dodrio', 31),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('furia'), 8],
            [move.get('ataque furia'), 12],
            [move.get('persecución'), 15],
            [move.get('picoteo'), 19],
            [move.get('doble golpe'), 22],
            [move.get('alboroto'), 29],
            [move.get('patada salto'), 40],
            [move.get('pico taladro'), 43],
            [move.get('golpe'), 50],
        ]
        this.stats = {
            hp: 35,
            attack: 85,
            defense: 45,
            spattack: 35,
            spdefense: 35,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}