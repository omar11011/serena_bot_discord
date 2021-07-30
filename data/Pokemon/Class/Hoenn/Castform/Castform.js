const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 351
        this.pokemon = 'Castform'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.8
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Castform Forma Sol'),
            new Entidades.Evolucion.Temporal('Castform Forma Lluvia'),
            new Entidades.Evolucion.Temporal('Castform Forma Nieve'),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('ascuas'), 1],
            [move.get('nieve polvo'), 1],
            [move.get('golpe cabeza'), 15],
            [move.get('meteorobola'), 30],
            [move.get('hirobomba'), 35],
            [move.get('llamarada'), 35],
            [move.get('ventisca'), 35],
            [move.get('vendaval'), 45],
        ]
        this.stats = {
            hp: 70,
            attack: 70,
            defense: 70,
            spattack: 70,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}