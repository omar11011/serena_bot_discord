const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 451
        this.pokemon = 'Skorupi'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 12
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Drapion', 40),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('desarme'), 5],
            [move.get('pin misil'), 9],
            [move.get('picadura'), 20],
            [move.get('colmillo veneno'), 23],
            [move.get('carga tóxica'), 27],
            [move.get('tajo umbrío'), 38],
            [move.get('triturar'), 45],
            [move.get('veneno x'), 49],
        ]
        this.stats = {
            hp: 40,
            attack: 50,
            defense: 90,
            spattack: 30,
            spdefense: 55,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}