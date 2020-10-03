

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        // this.preload.scenePlugin({
        //     key: 'rexboardplugin',
        //     src: '../../node_modules/'
        // })

    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}