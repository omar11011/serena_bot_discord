const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 453
        this.pokemon = 'Croagunk'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 23
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Toxicroak', 37),
        ]
        this.captura = 140
        this.amistad = 100
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('bofetón lodo'), 3],
            [move.get('picotazo venenoso'), 8],
            [move.get('persecución'), 15],
            [move.get('finta'), 17],
            [move.get('desquite'), 22],
            [move.get('bomba fango'), 29],
            [move.get('golpe bajo'), 31],
            [move.get('carga tóxica'), 36],
            [move.get('puya nociva'), 43],
            [move.get('bomba lodo'), 45],
            [move.get('eructo'), 47],
        ]
        this.stats = {
            hp: 48,
            attack: 61,
            defense: 40,
            spattack: 61,
            spdefense: 40,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}