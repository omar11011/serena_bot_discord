const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 588
        this.pokemon = 'Karrablast'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Escavalier'),
        ]
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('corte furia'), 13],
            [move.get('ataque furia'), 16],
            [move.get('golpe cabeza'), 20],
            [move.get('falsotortazo'), 25],
            [move.get('zumbido'), 28],
            [move.get('cuchillada'), 32],
            [move.get('derribo'), 32],
            [move.get('tijera x'), 44],
            [move.get('azote'), 49],
            [move.get('doble filo'), 56],
        ]
        this.stats = {
            hp: 55,
            attack: 75,
            defense: 45,
            spattack: 40,
            spdefense: 45,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}