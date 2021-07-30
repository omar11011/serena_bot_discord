const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 846
        this.pokemon = 'Arrokuda'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 1
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Barraskewda', 26),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('acua jet'), 1],
            [move.get('ataque furia'), 6],
            [move.get('mordisco'), 12],
            [move.get('buceo'), 24],
            [move.get('triturar'), 36],
            [move.get('hidroariete'), 42],
            [move.get('doble filo'), 48],
        ]
        this.stats = {
            hp: 41,
            attack: 63,
            defense: 40,
            spattack: 40,
            spdefense: 30,
            speed: 66,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}