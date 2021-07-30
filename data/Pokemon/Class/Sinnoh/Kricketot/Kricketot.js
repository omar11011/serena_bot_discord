const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 401
        this.pokemon = 'Kricketot'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kricketune', 10),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('picadura'), 16],
        ]
        this.stats = {
            hp: 37,
            attack: 25,
            defense: 41,
            spattack: 25,
            spdefense: 41,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}