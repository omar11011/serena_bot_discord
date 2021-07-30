const Entidades = require('../index')
const config = require('../../config.json')

const { join } = require('path')
const { readFileSync } = require('fs')

const nameImg = require('../../util/functions/nameImg')

class Base {
    constructor() {
        this.id = null
        this.spawn = true
        this.pokedex = true
        this.redeem = false
        this.pokemon = null
        this.region = null
        this.categoria = Entidades.Categoria.Normal
        this.tipo = [Entidades.Tipo.Normal]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.habilidad = null
        this.habilidadOculta = null
        this.peso = null
        this.altura = null
        this.grupoHuevo = [Entidades.Huevo.Desconocido]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = []
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 50,
            spattack: 50,
            spdefense: 50,
            speed: 50,
        }
        
        this.getType = () => {
            const result = []

            for(let i = 0; i < this.tipo.length; i++) {
                result.push(this.tipo[i].nombre)
            }

            return result
        }

        this.getGrupoHuevo = () => {
            const result = []

            for(let i = 0; i < this.grupoHuevo.length; i++) {
                result.push(this.grupoHuevo[i].nombre)
            }

            return result
        }
        
        this.debilidad = tipo => {
            const data = Entidades.Tipo[tipo].efectividad

            let a = 1

            for(let i = 0; i < this.tipo.length; i++) {
                let factor = 1

                if(data.efectivo.includes(this.tipo[i].nombre)) factor = 2
                if(data.pocoEfectivo.includes(this.tipo[i].nombre)) factor = 0.5
                if(data.ineficaz.includes(this.tipo[i].nombre)) factor = 0

                a *= factor
            }

            return a 
        }

        this.calculateStat = (nivel, iv, pe = 0, nature, stat = 'hp') => {
            stat = stat.toLowerCase()
            
            if(stat == 'hp') {
                return Math.round(10 + (nivel / 100 * ((this.stats.hp * 2) + iv + pe)) + nivel)
            } else {
                return Math.round((5 + (nivel / 100 * ((this.stats[stat] * 2) + iv + pe))) * Entidades.Naturaleza[nature][stat])
            }
        }

        this.generateStats = (plus = false, redeem = false) => {
            let min = 1
            let max = 31
            let result = []

            for(let i = 0; i < 6; i++) {
                if(redeem || plus) {
                    if(i < 3) {
                        max = 26
                        
                        if(redeem) min = 18
                        if(plus) min = 1
                    }
                    else min = 31, max = 31
                }
        
                result.push(min + Math.ceil(Math.random() * (max - min)))
            }

            if(redeem || plus) {
                const numbers = [0, 1, 2, 3, 4, 5]
                const newResult = [false, false, false, false, false, false]
        
                for(let i = 0; i < result.length; i++) {
                    const random = Math.floor(Math.random() * numbers.length)
                    newResult[numbers[random]] = result[i]
                    numbers.splice(random, 1)
                }
        
                result = newResult
            }

            let iv = 0
            for(let i = 0; i < result.length; i++) {
                iv += result[i]
            }

            iv /= 186
            result.push(iv * 100)

            return result
        }

        this.imagen = (shiny = false) => {
            let pokemon = this.pokemon

            if(pokemon[pokemon.length - 1] == '%') pokemon = pokemon.slice(0, pokemon.length - 1)

            let route = config.client.url + '/img/pokemon/'

            if(shiny) route += 'shiny/'

            pokemon = pokemon.split(" ").join("%20")
            route += pokemon + '.png'

            return route
        }

        this.getNature = () => {
            const natures = Object.keys(Entidades.Naturaleza)
            const numero = Math.floor(Math.random() * natures.length)

            return natures[numero]
        }

        this.needExp = level => {
            return this.crecimiento.needExp(level)
        }

        this.getExp = (levelMe, levelOponent, baseHpOponent) => {
            const extra = 4
            const base = (baseHpOponent * levelOponent) / 5
            const a = Math.pow((2 * levelOponent + 10), 5 / 2)
            const b = Math.pow((levelOponent + levelMe + 10), 5 / 2)
            const xp = Math.round((base * (a / b) + 1) * 1.5 * extra)

            return xp
        }

        this.getEvolveLevel = (level, gender) => {
            let result = false
            let evolves = []

            this.evolucion.map(e => {
                if(e.tipo == 'Nivel' && e.nivel <= level) {
                    if(e.hembra != null) {
                        if((e.hembra && gender == 'Hembra') || (!e.hembra && gender == 'Macho')) evolves.push(e.evolucion)
                    } else {
                        evolves.push(e.evolucion)
                    }
                }
            })

            if(evolves.length > 0) {
                result = evolves[Math.floor(Math.random() * evolves.length)]
            }

            return result
        }

        this.getImg = (shiny = false) => {
            const url = '../../client/public/img/pokemon/'
            const image = readFileSync(join(__dirname, url + (shiny ? 'shiny/' : '') + nameImg(this.pokemon) + '.png'))
            return image
        }

        this.randomGender = () => {
            if(this.probMacho == 0 && this.probHembra == 0) return 'Ninguno'
            else {
                if(Math.random() > this.probMacho) return 'Hembra'
                else return 'Macho'
            }
        }

        this.randomStatus = () => {
            const result = { number: 1 }
            const status = ['Congelado', 'Envenenado', 'Quemado', 'Paralizado', 'Dormido', 'Normal']

            result.nombre = status[Math.floor(Math.random() * status.length)]
            if(['Dormido', 'Congelado'].includes(result.nombre)) result.number = 2.5
            if(['Envenenado', 'Paralizado', 'Quemado'].includes(result.nombre)) result.number = 1.5

            return result
        }
    }
}

module.exports = Base