const Base = require('../Vulpix').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vulpix de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Item('Ninetales de Alola', item.get('piedra hielo')),
        ]
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('canto helado'), 10],
            [move.get('viento hielo'), 12],
            [move.get('vendetta'), 18],
            [move.get('finta'), 23],
            [move.get('infortunio'), 26],
            [move.get('rayo aurora'), 28],
            [move.get('paranormal'), 31],
            [move.get('rayo hielo'), 36],
            [move.get('ventisca'), 42],
            [move.get('frío polar'), 50],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}