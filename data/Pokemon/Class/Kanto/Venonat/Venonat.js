const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 48
        this.pokemon = 'Venonat'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 30
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Venomoth', 31),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('confusión'), 11],
            [move.get('psicorrayo'), 17],
            [move.get('doble rayo'), 25],
            [move.get('chupavidas'), 35],
            [move.get('cabezazo zen'), 37],
            [move.get('colmillo veneno'), 41],
            [move.get('psíquico'), 47],
        ]
        this.stats = {
            hp: 60,
            attack: 55,
            defense: 50,
            spattack: 40,
            spdefense: 55,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}