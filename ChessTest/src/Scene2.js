class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        // let gridX = config.width / 2 - 175;
        const graphics = this.add.graphics({
            lineStyle: {
                width: 1,
                color: 0xffffff,
                alpha: 1
            }
        });

        const board = this.rexBoard.add.board({
            grid: {
                gridType: 'quadGrid',
                x: 225,
                y: 125,
                cellWidth: 50,
                cellHeight: 50,
                type: 'orthogonal'  // 'orthogonal'|'isometric'
            },
            width: 8,
            height: 8
        })
        .forEachTileXY(function ( tileXY, board){
            var points = board.getGridPoints(tileXY.x, tileXY.y, true);
            graphics.strokePoints(points, true);
        }, this);

        board.setInteractive()
            .on('tiledown', function(pointer, tileXY){
                console.log(tileXY.x, ' ', tileXY.y);
                Phaser.Actions.Call(board.tileZToChessArray(0), function(gameObject){
                    gameObject.destroy();
                });
                if(!board.contains(tileXY.x, tileXY.y)) {
                    return;
                }
                this.rexBoard.add.shape(board, tileXY.x, tileXY.y, 0, 0x888800).setScale(0.7);
                var neighborsTileXYArray = board.getNeighborTileXY(tileXY, '0,1,2,3');
                var neighborTileXY;
                for (var i = 0, cnt = neighborsTileXYArray.length; i< cnt; i++) {
                    neighborTileXY = neighborsTileXYArray[i];
                    if(!board.contains(neighborTileXY.x, neighborTileXY.y)) {
                        continue;
                    }
                    this.rexBoard.add.shape(board, neighborTileXY.x, neighborTileXY.y, 0, 0x333300).setScale(0.4);
                }
            }, this)
    }
    
    update() {
        
    }
}