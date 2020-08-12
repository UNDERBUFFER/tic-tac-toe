
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
                const blockElement = document.getElementById(`${y}${x}`)
                blockElement.style.backgroundImage = settings.COMPUTER_SYMBOL
                blockElement.style.backgroundPosition = 'center'

                let event = new CustomEvent("STROKE", {
                    detail: {
                        gamer: settings.COMPUTER_VALUE
                    }
                })

                document.dispatchEvent(event)

                return true
            }
        }
        return false
    }
}

// todo MiddleIntelligence, HighIntelligence
