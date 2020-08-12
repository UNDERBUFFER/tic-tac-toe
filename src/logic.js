
'use strict';

class Logic {
    constructor() {
        this.map = new Map(settings.MAP_HEIGHT, settings.MAP_WIDTH)
        this.map.makeBlocks(settings.BLOCK_HEIGHT, settings.BLOCK_WIDTH)

        document.addEventListener("STROKE", (event) => {
            if (this.jogging()) {
                alert(`${event.detail.gamer} is winner!`)
                setTimeout(() => {
                    document.location.reload(true)
                }, 1000);
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
            if (list[i].filter(value => value !== null).length == list[i].length)
                return true
        }
        return false
    }
    diagonallyRun(list) {
        const range = Math.min(list[0].length, list.length)
        let diagonallyList = []

        for (let i = 0; i < range; i++)
            diagonallyList.push(list[i][i])

        if (diagonallyList.filter(value => value !== null).length == diagonallyList.length)
            return true
        return false
    }
}

const logic = new Logic()
