const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 543
        this.pokemon = 'Venipede'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.3
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Whirlipede', 22),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('desenrollar'), 1],
            [move.get('picotazo venenoso'), 5],
            [move.get('persecución'), 12],
            [move.get('cola veneno'), 19],
            [move.get('picadura'), 22],
            [move.get('carga tóxica'), 26],
            [move.get('rodillo de púas'), 33],
            [move.get('treparrocas'), 40],
            [move.get('doble filo'), 43],
        ]
        this.stats = {
            hp: 30,
            attack: 45,
            defense: 59,
            spattack: 30,
            spdefense: 39,
            speed: 57,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}