const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 422
        this.spawn = false
        this.pokemon = 'Shellos'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gastrodon', 30),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('hidropulso'), 7],
            [move.get('bomba fango'), 11],
            [move.get('poder oculto'), 16],
            [move.get('golpe cuerpo'), 29],
            [move.get('agua lodosa'), 37],
        ]
        this.stats = {
            hp: 76,
            attack: 48,
            defense: 48,
            spattack: 57,
            spdefense: 62,
            speed: 34,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}