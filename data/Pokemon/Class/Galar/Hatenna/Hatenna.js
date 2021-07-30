const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 856
        this.pokemon = 'Hatenna'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 3.4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hattrem', 32),
        ]
        this.captura = 235
        this.amistad = 50
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('voz cautivadora'), 10],
            [move.get('buena baza'), 16],
            [move.get('psicorrayo'), 20],
            [move.get('brillo mágico'), 30],
            [move.get('psíquico'), 40],
        ]
        this.stats = {
            hp: 42,
            attack: 30,
            defense: 45,
            spattack: 56,
            spdefense: 53,
            speed: 39,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}