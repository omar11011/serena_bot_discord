const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 355
        this.pokemon = 'Duskull'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 15
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dusclops', 37),
        ]
        this.captura = 190
        this.amistad = 35
        this.movimientos = [
            [move.get('tinieblas'), 1],
            [move.get('impresionar'), 9],
            [move.get('sombra vil'), 17],
            [move.get('persecución'), 22],
            [move.get('infortunio'), 38],
            [move.get('bola sombra'), 41],
            [move.get('vendetta'), 49],
            [move.get('premonición'), 54],
        ]
        this.stats = {
            hp: 20,
            attack: 40,
            defense: 90,
            spattack: 30,
            spdefense: 90,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}