const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 39
        this.pokemon = 'Jigglypuff'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal, 
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 5.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Wigglytuff', item.get('piedra lunar')),
        ]
        this.captura = 170
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('doble bofetón'), 17],
            [move.get('desenrollar'), 20],
            [move.get('canon'), 22],
            [move.get('escupir'), 25],
            [move.get('espabila'), 27],
            [move.get('golpe cuerpo'), 32],
            [move.get('giro bola'), 35],
            [move.get('vozarrón'), 41],
            [move.get('doble filo'), 45],
        ]
        this.stats = {
            hp: 115,
            attack: 45,
            defense: 20,
            spattack: 45,
            spdefense: 25,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}