const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 220
        this.pokemon = 'Swinub'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 6.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Piloswine', 33)
        ]
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('nieve polvo'), 8],
            [move.get('bofetón lodo'), 11],
            [move.get('bomba fango'), 18],
            [move.get('viento hielo'), 21],
            [move.get('canto helado'), 24],
            [move.get('derribo'), 28],
            [move.get('terremoto'), 37],
            [move.get('azote'), 40],
            [move.get('ventisca'), 44],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 40,
            spattack: 30,
            spdefense: 30,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}