const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 477
        this.pokemon = 'Dusknoir'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 106.6
        this.altura = 2.2
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('tinieblas'), 1],
            [move.get('puño fuego'), 1],
            [move.get('puño hielo'), 1],
            [move.get('puño trueno'), 1],
            [move.get('impresionar'), 9],
            [move.get('sombra vil'), 17],
            [move.get('persecución'), 22],
            [move.get('puño sombra'), 37],
            [move.get('infortunio'), 40],
            [move.get('bola sombra'), 45],
            [move.get('vendetta'), 57],
            [move.get('premonición'), 64],
        ]
        this.stats = {
            hp: 45,
            attack: 100,
            defense: 135,
            spattack: 65,
            spdefense: 135,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}