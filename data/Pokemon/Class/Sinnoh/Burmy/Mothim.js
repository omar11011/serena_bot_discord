const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 414
        this.pokemon = 'Mothim'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 23.3
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe bajo'), 1],
            [move.get('picadura'), 15],
            [move.get('poder oculto'), 20],
            [move.get('confusión'), 23],
            [move.get('tornado'), 26],
            [move.get('psicorrayo'), 32],
            [move.get('viento plata'), 38],
            [move.get('psíquico'), 44],
            [move.get('plancha'), 47],
            [move.get('zumbido'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 94,
            defense: 50,
            spattack: 94,
            spdefense: 50,
            speed: 66,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}