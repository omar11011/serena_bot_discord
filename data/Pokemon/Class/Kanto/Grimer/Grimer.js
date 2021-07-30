const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 88
        this.pokemon = 'Grimer'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 30
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Muk', 38),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('bofetón lodo'), 7],
            [move.get('residuos'), 15],
            [move.get('bomba fango'), 18],
            [move.get('lanzamiento'), 26],
            [move.get('bomba lodo'), 29],
            [move.get('onda tóxica'), 32],
            [move.get('lanza mugre'), 40],
            [move.get('eructo'), 46],
        ]
        this.stats = {
            hp: 80,
            attack: 80,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}