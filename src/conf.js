
'use strict';

const settings = {
    MAP_HEIGHT: 630,
    MAP_WIDTH: 630,
    BLOCK_HEIGHT: 210,
    BLOCK_WIDTH: 210,
    USER_VALUE: 'user',
    USER_SYMBOL: 'url(images/tic.png)',
    COMPUTER_VALUE: 'computer',
    COMPUTER_SYMBOL: 'url(images/tac.png)',
    giveNumberOfComputerAttempts() {
        return Math.pow((this.MAP_HEIGHT / this.BLOCK_HEIGHT) * (this.MAP_WIDTH / this.BLOCK_WIDTH), 2)
    }
}
