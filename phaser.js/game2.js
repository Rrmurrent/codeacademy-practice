$( document ).ready(function() {
    console.log( "game2.js is loaded" );
  });


const gameStates = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameStates.codey = this.add.sprite(150, 200, 'codey')
  // Setting cursor keys
  gameStates.cursors=
  this.input.keyboard.createCursorKeys();
    
  
}

function update() {
  // Update based on keypress
 if (gameStates.cursors.right.isDown) {
 
   gameStates.codey.x += 5;
 }
  if (gameStates.cursors.left.isDown) {
    gameStates.codey.x -= 5;
  }
  if (gameStates.cursors.up.isDown) {
    gameStates.codey.y -=5;
  }
  if (gameStates .cursors.down.isDown) {
    gameStates.codey.y +=5;
  }
}

const configs = {
	type: Phaser.AUTO,
	width: 500,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update,
    create
	}
}

const games = new Phaser.Game(configs)