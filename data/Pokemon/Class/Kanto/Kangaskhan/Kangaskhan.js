const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 115
        this.pokemon = 'Kangaskhan'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 80
        this.altura = 2.2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Kangaskhan', item.get('kangaskhanita'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('sorpresa'), 7],
            [move.get('mordisco'), 13],
            [move.get('doble golpe'), 19],
            [move.get('furia'), 22],
            [move.get('mega puño'), 25],
            [move.get('guardia baja'), 31],
            [move.get('puño mareo'), 34],
            [move.get('triturar'), 37],
            [move.get('enfado'), 46],
            [move.get('golpe bajo'), 49],
            [move.get('inversión'), 50],
        ]
        this.stats = {
            hp: 105,
            attack: 95,
            defense: 80,
            spattack: 40,
            spdefense: 80,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}