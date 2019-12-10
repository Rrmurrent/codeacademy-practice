$( document ).ready(function() {
    console.log( "game3.js loaded" );
    
  });

const gameStater = {}

function preload() {
  // load our 'incredible' sound here!
    this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3')
  
    this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3')

}

function create() {
  // add our 'incredible' sound to our scene here!
  gameStater.incredible = this.sound.add('incredible')
  gameStater.awesome = this.sound.add('awesome')
  
  // Display "Incredible" and "Really, really awesome" buttons
  
  gameStater.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameStater.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  
  
  
  gameStater.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameStater.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  
  
  
  gameStater.incredibleBox.setInteractive();
  gameStater.incredible = this.sound.add('incredible');
  gameStater.incredibleBox.on('pointerup', function() {
      gameStater.incredible.play();
  })

  
  gameStater.awesomeBox.setInteractive();

  gameStater.awesomeBox.on('pointerup', function() {
    gameStater.awesome.play()
  })
}

const configer = {
  type: Phaser.AUTO,
  width: 500,
  height: 600,
  backgroundColor: "#333333",
  scene: {
    preload,
    create
  }
}

const gamer = new Phaser.Game(configer)