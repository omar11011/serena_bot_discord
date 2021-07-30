const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 648
        this.spawn = false
        this.pokemon = 'Meloetta'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 6.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('canon'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('confusión'), 11],
            [move.get('acróbata'), 26],
            [move.get('psicorrayo'), 31],
            [move.get('eco voz'), 36],
            [move.get('espabila'), 50],
            [move.get('psíquico'), 57],
            [move.get('vozarrón'), 64],
            [move.get('a bocajarro'), 78],
        ]
        this.stats = {
            hp: 100,
            attack: 77,
            defense: 77,
            spattack: 128,
            spdefense: 128,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}