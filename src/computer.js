
'use strict';

class Computer {
    constructor(innerFoundation) {
        this.innerFoundation = innerFoundation
        this.heightLength = innerFoundation.length
        this.widthLength = innerFoundation[0].length
    }
    getRandomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }
}

class WeakIntelligence extends Computer {
    move() {
        for (let i = 0; i < this.heightLength * this.widthLength; i++) {
            const y = this.getRandomInteger(0, this.heightLength - 1)
            const x = this.getRandomInteger(0, this.widthLength - 1)

            if (this.innerFoundation[y][x] === null) {
                this.innerFoundation[y][x] = settings.COMPUTER_VALUE
                return true
            }
        }
        return false
    }
}
