const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 290
        this.pokemon = 'Nincada'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 5.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ninjask', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('absorber'), 5],
            [move.get('golpes furia'), 13],
            [move.get('bofetón lodo'), 17],
            [move.get('garra metal'), 21],
            [move.get('falsotortazo'), 33],
            [move.get('excavar'), 37],
        ]
        this.stats = {
            hp: 31,
            attack: 45,
            defense: 90,
            spattack: 30,
            spdefense: 30,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}