const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 363
        this.pokemon = 'Spheal'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 39.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sealeo', 32),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('pistola agua'), 1],
            [move.get('desenrollar'), 5],
            [move.get('bola hielo'), 13],
            [move.get('salmuera'), 17],
            [move.get('rayo aurora'), 21],
            [move.get('golpe cuerpo'), 26],
            [move.get('ronquido'), 31],
            [move.get('ventisca'), 41],
            [move.get('frío polar'), 46],
        ]
        this.stats = {
            hp: 70,
            attack: 40,
            defense: 50,
            spattack: 55,
            spdefense: 50,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}