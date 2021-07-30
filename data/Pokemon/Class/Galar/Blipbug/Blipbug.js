const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 824
        this.pokemon = 'Blipbug'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dottler', 10),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('estoicismo'), 1],
        ]
        this.stats = {
            hp: 25,
            attack: 20,
            defense: 20,
            spattack: 25,
            spdefense: 45,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}