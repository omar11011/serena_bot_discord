class Item {
    constructor() {
        this.data = require('../data/Item')

        this.get = nombre => {
            nombre = nombre.trim().toLowerCase()
            let result = false
            this.data.map(e => {
                if(nombre == e.nombre.toLowerCase()) result = e
            })
            return result
        }

        this.getItemOfCategory = category => {
            category = category.trim().toLowerCase()
            const result = []
            this.data.map(e => {
                if(e.categoria.toLowerCase() == category) result.push(e)
            })
            return result
        }

        this.getCategories = () => {
            return ['Ball', 'Cristal Z', 'Item Evolutivo', 'Máquina', 'Mega Piedra', 'Menta', 'Objeto de Batalla', 'Vitamina', 'Extra']
        }
    }
}

module.exports = new Item()