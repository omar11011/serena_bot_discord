const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 129
        this.pokemon = 'Magikarp'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 10
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gyarados', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('azote'), 15],
        ]
        this.stats = {
            hp: 20,
            attack: 10,
            defense: 55,
            spattack: 15,
            spdefense: 20,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}