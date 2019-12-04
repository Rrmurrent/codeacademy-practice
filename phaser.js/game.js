$( document ).ready(function() {
  console.log( "game.js loaded" );
});

// Defining "gameState"
const gameState = {};

function create() {
  gameState.circle = this.add.circle(20, 20, 5, 0xff0000);
  
  // Creating the circle and assigning it to gameState.circle

}

function update() {
  // Updating circle in gameState.circle
 gameState.circle.y += 1;
   gameState.circle.x += 1;

}

const config = {
	type: Phaser.AUTO,
	width: 500,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)

//-------------scratch work-----------//


//----------------Goals------------------
      //Continue to work on reloading only this div, so the circle continually moves.

        //Try One

            // function updateDiv()
            // { 
            //     $( ".circleDiv" ).load(window.location.href + " .circleDiv" );
            // }

            // updateDiv();

        //Try Two


            // function updateDiv()
            //  { 
            // $(".circleDiv").load(".circleDiv");
            // }
            // updateDiv();


// CONSOLE SAYS ITS A CORS ISSUES...ALSO, DOES PHASER WORK ON CHROME?
//----------End scratch work-------------//



