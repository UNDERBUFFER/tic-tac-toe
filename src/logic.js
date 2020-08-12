
'use strict';

class Logic {
    constructor() {
        this.map = new Map(settings.MAP_HEIGHT, settings.MAP_WIDTH)
        this.map.makeBlocks(settings.BLOCK_HEIGHT, settings.BLOCK_WIDTH)
        this.winner = null
        this.computer = new WeakIntelligence(this.map.innerFoundation)

        document.addEventListener("STROKE", (event) => {
            if (this.jogging() && this.winner !== null) {
                alert(`${this.winner} is winner!`)
                setTimeout(() => {
                    document.location.reload(true)
                }, 100);
            }
            else if (!this.map.innerFoundation.map(value => value.includes(null)).includes(true)) {
                alert(`draw!`)
                setTimeout(() => {
                    document.location.reload(true)
                }, 100);
            }
            else {
                if (event.detail.gamer == settings.USER_VALUE) {
                    this.computer.move()
                }
            }
        }, false)
    }
    jogging() {
        let results = []
        const list = this.map.innerFoundation

        results.push(this.sideRun(list))
        results.push(this.sideRun(flipMatrix(list)))
        results.push(this.diagonallyRun(list))
        results.push(this.diagonallyRun(reverseMatrix(list)))

        return results.includes(true)
    }
    sideRun(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].filter(value => value !== null).length == list[i].length) {
                if (list[i].filter(value => value == settings.USER_VALUE).length == list[i].length)
                    this.winner = settings.USER_VALUE
                if (list[i].filter(value => value == settings.COMPUTER_VALUE).length == list[i].length)
                    this.winner = settings.COMPUTER_VALUE
                return true
            }
        }
        return false
    }
    diagonallyRun(list) {
        const range = Math.min(list[0].length, list.length)
        let diagonallyList = []

        for (let i = 0; i < range; i++)
            diagonallyList.push(list[i][i])

        if (diagonallyList.filter(value => value !== null).length == diagonallyList.length) {
            if (diagonallyList.filter(value => value == settings.USER_VALUE).length == diagonallyList.length)
                this.winner = settings.USER_VALUE
            if (diagonallyList.filter(value => value == settings.COMPUTER_VALUE).length == diagonallyList.length)
                this.winner = settings.COMPUTER_VALUE
            return true
        }
        return false
    }
}

const logic = new Logic()
