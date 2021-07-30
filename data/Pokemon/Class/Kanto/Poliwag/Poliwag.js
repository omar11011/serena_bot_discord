const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 60
        this.pokemon = 'Poliwag'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 12.4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Poliwhirl', 25),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 5],
            [move.get('burbuja'), 11],
            [move.get('doble bofetón'), 15],
            [move.get('golpe cuerpo'), 21],
            [move.get('rayo burbuja'), 25],
            [move.get('disparo lodo'), 28],
            [move.get('espabila'), 35],
            [move.get('hidrobomba'), 38],
            [move.get('bomba fango'), 41],
        ]
        this.stats = {
            hp: 40,
            attack: 50,
            defense: 40,
            spattack: 40,
            spdefense: 40,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}