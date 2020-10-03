

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.spritesheet("pieces", "assets/chess-sprite.png", {
            frameWidth: 45,
            frameHeight: 45
        });

    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}