const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 475
        this.pokemon = 'Gallade'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 52
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Gallade', item.get('galladita')),
            new Entidades.Evolucion.Gigamax('Gallade Gigamax'),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('hoja aguda'), 1],
            [move.get('tajo umbrío'), 1],
            [move.get('confusión'), 4],
            [move.get('corte furia'), 14],
            [move.get('golpe aéreo'), 17],
            [move.get('psicocorte'), 31],
            [move.get('amago'), 40],
            [move.get('falsotortazo'), 44],
            [move.get('a bocajarro'), 53],
            [move.get('poder reserva'), 58],
        ]
        this.stats = {
            hp: 68,
            attack: 125,
            defense: 65,
            spattack: 65,
            spdefense: 115,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}