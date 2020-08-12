
'use strict';

class Block {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.element = document.createElement('div')
    }
    setValuesToElement(shiftRight=0, shiftUp=0) {
        this.element.className = 'block'
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.marginLeft = `${shiftRight}px`
        this.element.style.marginTop = `${shiftUp}px`
    }
    getElement() {
        return this.element
    }
}
