const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 459
        this.pokemon = 'Snover'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 50.5
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Abomasnow', 40),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('hoja afilada'), 5],
            [move.get('viento hielo'), 9],
            [move.get('canto helado'), 26],
            [move.get('mazazo'), 36],
            [move.get('ventisca'), 41],
            [move.get('frío polar'), 46],
        ]
        this.stats = {
            hp: 60,
            attack: 62,
            defense: 50,
            spattack: 62,
            spdefense: 60,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}