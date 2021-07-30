const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 374
        this.pokemon = 'Beldum'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 95.2
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Metang', 20),
        ]
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('derribo'), 1],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 80,
            spattack: 35,
            spdefense: 60,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}