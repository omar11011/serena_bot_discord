const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 307
        this.pokemon = 'Meditite'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11.2
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Medicham', 37),
        ]
        this.captura = 180
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('confusión'), 7],
            [move.get('amago'), 15],
            [move.get('palmeo'), 17],
            [move.get('poder oculto'), 20],
            [move.get('patada salto alta'), 28],
            [move.get('inversión'), 39],
            [move.get('contraataque'), 44],
        ]
        this.stats = {
            hp: 30,
            attack: 40,
            defense: 55,
            spattack: 40,
            spdefense: 55,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}