const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 238
        this.pokemon = 'Smoochum'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Jynx', 20),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('lengüetazo'), 5],
            [move.get('nieve polvo'), 11],
            [move.get('confusión'), 15],
            [move.get('arrumaco'), 21],
            [move.get('alud'), 35],
            [move.get('psíquico'), 38],
            [move.get('ventisca'), 48],
        ]
        this.stats = {
            hp: 45,
            attack: 30,
            defense: 15,
            spattack: 85,
            spdefense: 65,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}