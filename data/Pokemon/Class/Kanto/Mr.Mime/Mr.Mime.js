const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 122
        this.pokemon = 'Mr. Mime'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 54.5
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('hoja mágica'), 1],
            [move.get('confusión'), 1],
            [move.get('furia'), 7],
            [move.get('doble bofetón'), 11],
            [move.get('psicoonda'), 15],
            [move.get('doble filo'), 20],
            [move.get('psicorrayo'), 25],
            [move.get('psíquico'), 39],
            [move.get('mega patada'), 45],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 65,
            spattack: 100,
            spdefense: 120,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}