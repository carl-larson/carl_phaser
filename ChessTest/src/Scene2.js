
class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        var graphics = this.add.graphics({
            lineStyle: {
                width: 1,
                color: 0xffffff,
                alpha: 1
            }
        });

        var board = this.rexBoard.add.board({
            grid: {
                gridType: 'quadGrid',
                x: 400,
                y: 300,
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
    }
    
    update() {
        
    }
}