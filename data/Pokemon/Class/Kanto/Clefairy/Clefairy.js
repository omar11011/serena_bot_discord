const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 35
        this.pokemon = 'Clefairy'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 7.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Clefable', item.get('piedra lunar')),
        ]
        this.captura = 150
        this.amistad = 140
        this.movimientos = [
            [move.get('voz cautivadora'), 1],
            [move.get('destructor'), 1],
            [move.get('doble bofetón'), 10],
            [move.get('espabila'), 22],
            [move.get('poder reserva'), 28],
            [move.get('golpe cuerpo'), 40],
            [move.get('fuerza lunar'), 46],
            [move.get('puño meteoro'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 45,
            defense: 48,
            spattack: 60,
            spdefense: 65,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}