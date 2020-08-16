
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
    createComputerBlock(x, y) {
        this.innerFoundation[y][x] = settings.COMPUTER_VALUE
        const blockElement = document.getElementById(`${y}${x}`)
        blockElement.style.backgroundImage = settings.COMPUTER_SYMBOL
        blockElement.style.backgroundPosition = 'center'
        return true
    }
    createEvent() {
        document.dispatchEvent(new CustomEvent("STROKE", {
            detail: {
                gamer: settings.COMPUTER_VALUE
            }
        }))
        return true
    }
}

class WeakIntelligence extends Computer {
    move() {
        for (let i = 0; i < settings.giveNumberOfComputerAttempts(); i++) {
            const y = this.getRandomInteger(0, this.heightLength - 1)
            const x = this.getRandomInteger(0, this.widthLength - 1)
            if (this.innerFoundation[y][x] === null) {
                this.createComputerBlock(x, y)
                return this.createEvent()
            }
        }
        return false
    }
}

class MiddleIntelligence extends WeakIntelligence {
    move() {
        let meaningToGoLikeThis = {
            horizontally: -1,
            vertically: -1,
            diagonally: -1
        }

        // horizontally
        for (let element of this.innerFoundation) {
            if (element.includes(null)) {
                meaningToGoLikeThis.horizontally = meaningToGoLikeThis.horizontally == -1 ? 0 : meaningToGoLikeThis.horizontally
                if (element.includes(settings.USER_VALUE))
                    meaningToGoLikeThis.horizontally = meaningToGoLikeThis.horizontally < countOccurrences(element, settings.USER_VALUE) ? countOccurrences(element, settings.USER_VALUE) : meaningToGoLikeThis.horizontally
            }
        }

        // vertically
        for (let element of flipMatrix(this.innerFoundation)) {
            if (element.includes(null)) {
                meaningToGoLikeThis.vertically = meaningToGoLikeThis.vertically == -1 ? 0 : meaningToGoLikeThis.vertically
                if (element.includes(settings.USER_VALUE))
                    meaningToGoLikeThis.vertically = meaningToGoLikeThis.vertically < countOccurrences(element, settings.USER_VALUE) ? countOccurrences(element, settings.USER_VALUE) : meaningToGoLikeThis.vertically
            }
        }

        // diagonally
        const range = Math.min(this.innerFoundation[0].length, this.innerFoundation.length)
        let diagonals = []
        let rightDiagonal = []
        let leftDiagonal = []
        for (let i = 0; i < range; i++) {
            leftDiagonal.push(this.innerFoundation[i][i])
            rightDiagonal.push(reverseMatrix(this.innerFoundation)[i][i])
        }
        diagonals.push(leftDiagonal, rightDiagonal)
        for (let element of diagonals) {
            if (element.includes(null)) {
                meaningToGoLikeThis.diagonally = meaningToGoLikeThis.diagonally == -1 ? 0 : meaningToGoLikeThis.diagonally
                if (element.includes(settings.USER_VALUE))
                    meaningToGoLikeThis.diagonally = meaningToGoLikeThis.diagonally < countOccurrences(element, settings.USER_VALUE) ? countOccurrences(element, settings.USER_VALUE) : meaningToGoLikeThis.diagonally
            }
        }

        let key = null
        let value = 0
        for (let name of Object.keys(meaningToGoLikeThis)) {
            if (meaningToGoLikeThis[name] > value) {
                key = name
                value = meaningToGoLikeThis[name]
            }
        }
        if (key == null)
            return super.move()

        console.log(meaningToGoLikeThis, key)

        switch (key) {
            case 'horizontally':
                for (let index = 0; index < this.innerFoundation.length; index++) {
                    if (countOccurrences(this.innerFoundation[index], settings.USER_VALUE) == value) {
                        for (let i = 0; i < settings.giveNumberOfComputerAttempts(); i++) {
                            const x = this.getRandomInteger(0, this.widthLength - 1)
                            if (this.innerFoundation[index][x] == null) {
                                this.createComputerBlock(x, index)
                                return this.createEvent()
                            }
                        }
                    }
                }
                break;
            case 'vertically':
                const list = flipMatrix(this.innerFoundation)
                for (let index = 0; index < list.length; index++) {
                    console.log(countOccurrences(list[index], settings.USER_VALUE), value)
                    if (countOccurrences(list[index], settings.USER_VALUE) == value) {
                        for (let i = 0; i < settings.giveNumberOfComputerAttempts(); i++) {
                            const y = this.getRandomInteger(0, this.heightLength - 1)
                            if (this.innerFoundation[y][index] == null) {
                                this.createComputerBlock(index, y)
                                return this.createEvent()
                            }
                        }
                    }
                }
                console.log('?')
                break;
            case 'diagonally':
                if (countOccurrences(leftDiagonal, settings.USER_VALUE) == value) {
                    for (let i = 0; i < settings.giveNumberOfComputerAttempts(); i++) {
                        const x = this.getRandomInteger(0, range - 1)
                        const y = x
                        if (this.innerFoundation[y][x] == null) {
                            this.createComputerBlock(x, y)
                            return this.createEvent()
                        }
                    }
                }
                else if (countOccurrences(rightDiagonal, settings.USER_VALUE) == value) {
                    console.log(rightDiagonal)
                    for (let i = 0; i < settings.giveNumberOfComputerAttempts(); i++) {
                        const y = this.getRandomInteger(0, range - 1)
                        const x = range - 1 - y
                        console.log('x: ', x)
                        if (this.innerFoundation[y][x] == null) {
                            this.createComputerBlock(x, y)
                            return this.createEvent()
                        }
                    }
                }
                break;
        }
        return false
    }
}


// todo new logic on line 91
// class HighIntelligence extends MiddleIntelligence {
//     move() {
//         return this.giveComplexity()
//     }
// }
