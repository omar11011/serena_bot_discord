const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 769
        this.pokemon = 'Sandygast'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 70
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Palossand', 42),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 5],
            [move.get('bucle arena'), 15],
            [move.get('megaagotar'), 18],
            [move.get('terratemblor'), 23],
            [move.get('gigadrenado'), 36],
            [move.get('bola sombra'), 41],
            [move.get('tierra viva'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 80,
            spattack: 70,
            spdefense: 45,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}