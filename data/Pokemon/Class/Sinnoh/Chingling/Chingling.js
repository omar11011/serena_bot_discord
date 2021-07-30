const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 433
        this.pokemon = 'Chingling'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.6
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Chimecho'),
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('impresionar'), 7],
            [move.get('confusión'), 10],
            [move.get('última baza'), 16],
            [move.get('alboroto'), 32],
        ]
        this.stats = {
            hp: 45,
            attack: 30,
            defense: 50,
            spattack: 65,
            spdefense: 50,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}