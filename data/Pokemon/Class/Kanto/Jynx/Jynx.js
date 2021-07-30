const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 124
        this.pokemon = 'Jynx'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 40.6
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('beso drenaje'), 1],
            [move.get('destructor'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('nieve polvo'), 11],
            [move.get('doble bofetón'), 15],
            [move.get('puño hielo'), 18],
            [move.get('arrumaco'), 21],
            [move.get('espabila'), 33],
            [move.get('alud'), 33],
            [move.get('golpe cuerpo'), 44],
            [move.get('golpe'), 47],
            [move.get('estrujón'), 49],
            [move.get('ventisca'), 60],
        ]
        this.stats = {
            hp: 65,
            attack: 50,
            defense: 35,
            spattack: 115,
            spdefense: 95,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}