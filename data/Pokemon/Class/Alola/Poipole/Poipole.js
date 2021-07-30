const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 803
        this.pokemon = 'Poipole'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 1.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Naganadel', move.get('pulso dragón')),
        ]
        this.captura = 45
        this.amistad = 0
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ácido'), 1],
            [move.get('ataque furia'), 7],
            [move.get('carga tóxica'), 13],
            [move.get('puya nociva'), 37],
            [move.get('aguijón letal'), 47],
            [move.get('pulso dragón'), 60],
        ]
        this.stats = {
            hp: 67,
            attack: 73,
            defense: 67,
            spattack: 73,
            spdefense: 67,
            speed: 73,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}