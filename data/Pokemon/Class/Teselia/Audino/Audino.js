const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 531
        this.pokemon = 'Audino'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 31
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Audino', item.get('audinita')),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('voz cautivadora'), 13],
            [move.get('doble bofetón'), 17],
            [move.get('daño secreto'), 25],
            [move.get('derribo'), 33],
            [move.get('doble filo'), 49],
            [move.get('vozarrón'), 53],
            [move.get('última baza'), 57],
        ]
        this.stats = {
            hp: 103,
            attack: 60,
            defense: 86,
            spattack: 60,
            spdefense: 86,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}