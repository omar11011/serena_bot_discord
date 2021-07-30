const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 767
        this.pokemon = 'Wimpod'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 12
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Golisopod', 30),
        ]
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('estoicismo'), 1],
        ]
        this.stats = {
            hp: 25,
            attack: 35,
            defense: 40,
            spattack: 20,
            spdefense: 30,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}