var gameState = 0, playerCount = 0, screenState = 0
var player, game, form, allPlayers, distance = 0, carendnum = 0
var carset = [], player1, player2, player3, player4
var database 


function preload(){
  

}
function setup(){
    createCanvas(1000, 1000)
    database = firebase.database();
    game = new Game()
    game.getGS();
    game.start();
    //player = new Player
}
function draw(){

    if(playerCount === 4){
      game.updateGS(1);
    }
    if(gameState === 1){
        clear();

        //gosound.stop();
        //background(groundimg)
        game.play();
        drawSprites();
    }
    if(gameState === 2){
        game.end();
    }
    
    text("Xpos: "+mouseX +"yPos: "+ mouseY,500,40);
    //console.log("Xpos: "+mouseX +"yPos: "+ mouseY)
    //if(screenState === 1){
    //    createCanvas(displayWidth, displayHeight)
    //    game.play();
   /// }
}