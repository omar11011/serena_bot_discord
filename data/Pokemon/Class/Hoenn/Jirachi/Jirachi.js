const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 385
        this.pokemon = 'Jirachi'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 1.1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Jirachi', item.get('jirachita')),
        ]
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('rapidez'), 10],
            [move.get('psíquico'), 20],
            [move.get('cabezazo zen'), 35],
            [move.get('doble filo'), 40],
            [move.get('premonición'), 55],
            [move.get('última baza'), 65],
            [move.get('deseo oculto'), 70],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}