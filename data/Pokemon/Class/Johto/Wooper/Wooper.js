const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 194
        this.pokemon = 'Wooper'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Quagsire', 20)
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('disparo lodo'), 9],
            [move.get('atizar'), 15],
            [move.get('bomba fango'), 19],
            [move.get('terremoto'), 33],
            [move.get('agua lodosa'), 47],
        ]
        this.stats = {
            hp: 55,
            attack: 45,
            defense: 45,
            spattack: 25,
            spdefense: 25,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}