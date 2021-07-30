const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 473
        this.pokemon = 'Mamoswine'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 291
        this.altura = 2.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 50
        this.amistad = 50
        this.movimientos = [
            [move.get('poder pasado'), 1],
            [move.get('picotazo'), 1],
            [move.get('nieve polvo'), 8],
            [move.get('bofetón lodo'), 11],
            [move.get('bomba fango'), 18],
            [move.get('colmillo hielo'), 24],
            [move.get('derribo'), 28],
            [move.get('doble golpe'), 33],
            [move.get('golpe'), 41],
            [move.get('terremoto'), 46],
            [move.get('ventisca'), 52],
        ]
        this.stats = {
            hp: 110,
            attack: 130,
            defense: 80,
            spattack: 70,
            spdefense: 60,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}