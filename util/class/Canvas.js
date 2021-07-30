const { createCanvas, loadImage } = require('canvas')

class Canvas {
    constructor(x, y) {
        this.lienzo = createCanvas(x, y)
        this.ctx = this.lienzo.getContext('2d')

        this.loadImage = async (x, y, width, height, url) => {
            const image = await loadImage(url)
            this.ctx.drawImage(image, x, y, width, height)
        }
        
        this.drawImage = async (x, y, width, height, url) => {
            const image = new Image()

            image.src = url
            this.ctx.drawImage(image.src, x, y, width, height)
        }

        this.textNeon = obj => {
            const gradient = this.ctx.createLinearGradient(0, 0, this.lienzo.width, 0)

            gradient.addColorStop(0, "magenta")
            gradient.addColorStop(0.5, "blue")
            gradient.addColorStop(1.0, "red")

            this.ctx.rotate(0.1)
            this.ctx.font = obj.size + 'px Arial'
            this.ctx.fillStyle = gradient
            this.ctx.fillText(obj.text, obj.x, obj.y)
        }
    }
}

module.exports = Canvas