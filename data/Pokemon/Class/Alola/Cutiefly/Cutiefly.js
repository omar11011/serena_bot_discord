const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 742
        this.pokemon = 'Cutiefly'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.2
        this.altura = 0.1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ribombee', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('viento feérico'), 4],
            [move.get('estoicismo'), 10],
            [move.get('viento plata'), 13],
            [move.get('beso drenaje'), 16],
            [move.get('zumbido'), 26],
            [move.get('brillo mágico'), 31],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 40,
            spattack: 55,
            spdefense: 40,
            speed: 84,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}