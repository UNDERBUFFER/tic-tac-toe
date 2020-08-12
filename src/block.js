
'use strict';

class Block {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.block = document.createElement('div')
    }
    setValuesToElement(id, shiftRight=0, shiftUp=0) {
        this.block.className = 'block'
        this.block.id = id
        this.block.style.height = `${this.height}px`
        this.block.style.width = `${this.width}px`
        this.block.style.marginLeft = `${shiftRight}px`
        this.block.style.marginTop = `${shiftUp}px`
    }
    getElement() {
        return this.block
    }
}
