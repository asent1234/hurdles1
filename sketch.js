var gameState = 0, playerCount = 0, screenState = 0;
var player, game, form, allPlayers, distance = 0, carendnum = 0;
var plrset = [], player1, player2, player3, player4, ground1, ground2, ground3, ground4;
var database ;
var playerindex
var o11, o12, o13, o14, o15 ,o21, o22, o23, o24, o25, o31, o32, o33, o34, o35, o41, o42, o43, o44, o45
var flag = 0
function preload(){
  

}
function setup(){
    createCanvas(1000, 1000)
    database = firebase.database();
    game = new Game()
    game.getGS();
    game.start();
    Player.updatePE(0)
    //player = new Player
}
function draw(){

    if(playerCount === 4){
      game.updateGS(1);
      player.positionx =  plrset[player.index - 1].position.x
      player.positiony =  plrset[player.index - 1].position.y
      player.updatePlayerInfo();
    }
    if(gameState === 1){
        clear();
        game.play();
        drawSprites();
        gravity(plrset[0])
        gravity(plrset[1])
        gravity(plrset[2])
        gravity(plrset[3])
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
function gravity(object){
    object.velocityY = object.velocityY + 0.8 
}
