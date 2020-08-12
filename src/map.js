
'use strict';

class Map {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.innerFoundation = []
        this.map = document.getElementById('map')
    }
    makeBlocks(blockHeight, blockWidth) {
        for (let i = 0; i < this.height / blockHeight; i++) {
            this.innerFoundation.push([])
            for (let j = 0; j < this.width / blockWidth; j++) {
                this.innerFoundation[i].push(null)
                const block = new Block(blockHeight, blockWidth)
                block.setValuesToElement(`${i}${j}`, j * blockWidth, i * blockHeight)
                const blockElement = block.getElement()
                blockElement.onclick = this.setOnclickFunction(blockElement)
                this.map.appendChild(blockElement)
            }
        }
    }
    setOnclickFunction(blockElement) {
        return () => {
            const i = blockElement.id.split('').map(value => Number(value))[0]
            const j = blockElement.id.split('').map(value => Number(value))[1]
            this.innerFoundation[i][j] = 'user'
            console.log(this.innerFoundation)
        }
    }
}
