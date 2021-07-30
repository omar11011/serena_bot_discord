const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 21
        this.pokemon = 'Spearow'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal, 
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Fearow', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque furia'), 9],
            [move.get('persecución'), 13],
            [move.get('golpe aéreo'), 15],
            [move.get('buena baza'), 29],
            [move.get('pico taladro'), 36],
        ]
        this.stats = {
            hp: 40,
            attack: 60,
            defense: 30,
            spattack: 31,
            spdefense: 31,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}