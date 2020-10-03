// import rexboardplugin from '../../node_modules/phaser3-rex-plugins/dist/rexboardplugin.min.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    plugins: {
        scene: [{
            key: 'rexBoard',
            plugin: rexboardplugin,
            mapping: 'rexBoard'
        }]
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
};

const game = new Phaser.Game(config);