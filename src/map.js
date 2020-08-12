
'use strict';

class Map {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.innerFoundation = []
        this.map = document.getElementById('map')
    }
    makeBlocks(blockHeight, blockWidth) {
        console.log('a')
        for (let i = 0; i < this.height / blockHeight; i++) {
            this.innerFoundation.push([])
            for (let j = 0; j < this.width / blockWidth; j++) {
                this.innerFoundation[i].push(null)
                const block = new Block(blockHeight, blockWidth)
                block.setValuesToElement(j * blockWidth, i * blockHeight)
                this.map.appendChild(block.getElement())
            }
        }
    }
}
