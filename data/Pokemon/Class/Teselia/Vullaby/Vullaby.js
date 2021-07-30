const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 629
        this.pokemon = 'Vullaby'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mandibuzz', 54),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('ataque furia'), 5],
            [move.get('picoteo'), 10],
            [move.get('finta'), 23],
            [move.get('castigo'), 28],
            [move.get('tajo aéreo'), 41],
            [move.get('pulso umbrío'), 46],
            [move.get('pájaro osado'), 59],
        ]
        this.stats = {
            hp: 70,
            attack: 55,
            defense: 75,
            spattack: 45,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}