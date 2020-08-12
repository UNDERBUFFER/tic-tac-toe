
'use strict';

class Logic {
    constructor() {
        this.map = new Map(settings.MAP_HEIGHT, settings.MAP_WIDTH)
        this.map.makeBlocks(settings.BLOCK_HEIGHT, settings.BLOCK_WIDTH)
    }
}
