const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 447
        this.pokemon = 'Riolu'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 20.2
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Lucario'),
        ]
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('contraataque'), 6],
            [move.get('amago'), 11],
            [move.get('palmeo'), 15],
            [move.get('inversión'), 29],
        ]
        this.stats = {
            hp: 40,
            attack: 70,
            defense: 40,
            spattack: 35,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}