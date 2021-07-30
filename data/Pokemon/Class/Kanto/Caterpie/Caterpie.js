const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 10
        this.pokemon = 'Caterpie'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho, 
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.9
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Metapod', 7),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 9],
        ]
        this.stats = {
            hp: 45,
            attack: 30,
            defense: 35,
            spattack: 20,
            spdefense: 20,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}