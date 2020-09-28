

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2]
    // physics: {
    //     default: "arcade",
    //     arcade: {
    //         debug: false
    //     }
    // }
};

// var gameSettings = {
//     playerSpeed: 200
// }


const game = new Phaser.Game(config);