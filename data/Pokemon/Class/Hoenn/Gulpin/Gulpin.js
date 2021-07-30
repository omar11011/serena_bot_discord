const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 316
        this.pokemon = 'Gulpin'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 10.4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Swalot', 26)
        ]
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('residuos'), 10],
            [move.get('bomba ácida'), 17],
            [move.get('escupir'), 28],
            [move.get('bomba lodo'), 33],
            [move.get('eructo'), 41],
            [move.get('estrujón'), 43],
            [move.get('lanza mugre'), 49],
        ]
        this.stats = {
            hp: 70,
            attack: 43,
            defense: 53,
            spattack: 43,
            spdefense: 53,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}