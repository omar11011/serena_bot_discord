const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 872
        this.pokemon = 'Snom'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.8
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Frosmoth'),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('estoicismo'), 1],
        ]
        this.stats = {
            hp: 30,
            attack: 25,
            defense: 35,
            spattack: 45,
            spdefense: 30,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}