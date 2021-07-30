const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 125
        this.pokemon = 'Electabuzz'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Eléctrico
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 30
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Electivire', item.get('electrizador'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('impactrueno'), 5],
            [move.get('patada baja'), 8],
            [move.get('furia'), 9],
            [move.get('rapidez'), 12],
            [move.get('onda voltio'), 15],
            [move.get('bola voltio'), 22],
            [move.get('golpe cuerpo'), 25],
            [move.get('puño trueno'), 29],
            [move.get('chispazo'), 36],
            [move.get('rayo'), 49],
            [move.get('trueno'), 55],
        ]
        this.stats = {
            hp: 65,
            attack: 83,
            defense: 57,
            spattack: 95,
            spdefense: 85,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}