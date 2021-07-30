const Base = require('./Riolu').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 448
        this.pokemon = 'Lucario'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Acero,
        ]
        this.peso = 54
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Lucario', item.get('lucarita')),
            new Entidades.Evolucion.Gigamax('Lucario Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('garra metal'), 1],
            [move.get('pulso umbrío'), 1],
            [move.get('contraataque'), 6],
            [move.get('amago'), 11],
            [move.get('palmeo'), 15],
            [move.get('puño incremento'), 15],
            [move.get('ataque óseo'), 29],
            [move.get('esfera aural'), 51],
            [move.get('a bocajarro'), 55],
            [move.get('pulso dragón'), 60],
            [move.get('velocidad extrema'), 65],
        ]
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 70,
            spattack: 115,
            spdefense: 70,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}