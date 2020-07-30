class Game{
    constructor(){

    }
    getGS(){
    var gsrefer = database.ref('gameState')
    gsrefer.on("value", function(data){
        gameState = data.val();  
    });
    }
    
    updateGS(state){
        var updategsref = database.ref('/')
        updategsref.update({
            gameState: state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPC();
            form = new Form 
            form.display(); 
        }
        player1 = createSprite(100,100,20,20);
        player2 = createSprite(100,200,20,20);
        player3 = createSprite(100,300,20,20);
        player4 = createSprite(100,400,20,20);
        
        ground1 = createSprite(500,120,1000,10);
        ground2 = createSprite(500,220,1000,10);
        ground3 = createSprite(500,320,1000,10);
        ground4 = createSprite(500,420,1000,10);
        plrset = [player1, player2, player3, player4];
        
        o11 = createSprite(200,100,20, 20);
        o12 = createSprite(300,100,20, 20);
        o13 = createSprite(500,100,20, 20);
        o14 = createSprite(600,100,20, 20);
        o15 = createSprite(700,100,20, 20);

        o21 = createSprite(200,200,20, 20);
        o22 = createSprite(300,200,20, 20);
        o23 = createSprite(500,200,20, 20);
        o24 = createSprite(600,200,20, 20);
        o25 = createSprite(700,200,20, 20);
       
        o31 = createSprite(200,300,20, 20);
        o32 = createSprite(300,300,20, 20);
        o33 = createSprite(500,300,20, 20);
        o34 = createSprite(600,300,20, 20);
        o35 = createSprite(700,300,20, 20);
       
        o41 = createSprite(200,400,20, 20);
        o42 = createSprite(300,400,20, 20);
        o43 = createSprite(500,400,20, 20);
        o44 = createSprite(600,400,20, 20);
        o45 = createSprite(700,400,20, 20);


    }
    play(){
        form.hide();
        Player.getAllPlayerInfo();
        player.getPE();
        plrset[0].collide(ground1);
        plrset[1].collide(ground2);
        plrset[2].collide(ground3);
        plrset[3].collide(ground4);

        if(plrset[0].isTouching(o11) ||plrset[0].isTouching(o12) || plrset[0].isTouching(o13) || plrset[0].isTouching(o14) ){
            plrset[0].remove();
        }
        if(plrset[1].isTouching(o21) ||plrset[1].isTouching(o22) || plrset[1].isTouching(o23) || plrset[1].isTouching(o24) ){
            plrset[1].remove();
        }
        if(plrset[2].isTouching(o31) ||plrset[2].isTouching(o32) || plrset[2].isTouching(o33) || plrset[2].isTouching(o34) ){
            plrset[2].remove();
        }
        if(plrset[3].isTouching(o41) ||plrset[3].isTouching(o42) || plrset[3].isTouching(o43) || plrset[3].isTouching(o44) ){
            plrset[3].remove();
        }
        plrset[player.index - 1 ].shapeColor = "black" ;
        if(allPlayers !== undefined){
        for(var i = 1; i < 5; i++ ){
            if(i !== player.index){
            var posx = allPlayers["player" + i]["positionx"]
            var posy = allPlayers["player"+ i]["positiony"]
            plrset[i - 1].position.x = posx
            plrset[i - 1].position.y = posy
            }
        }
    }
        if(keyIsDown(UP_ARROW) && player.index !== null && player.distance < 4350 && plrset[player.index - 1].position.y > player.index * 100){
            player.positionx =  plrset[player.index - 1].position.x
            player.positiony =  plrset[player.index - 1].position.y
            player.updatePlayerInfo();
            plrset[player.index - 1].position.y = plrset[player.index - 1].position.y - 50
            console.log("hello")

        }
        if(keyIsDown(RIGHT_ARROW) && player.distance < 4350){
            player.positionx =  plrset[player.index - 1].position.x
            player.positiony =  plrset[player.index - 1].position.y
            player.distance = player.distance + 50
            player.updatePlayerInfo(); 
            plrset[player.index - 1].position.x = plrset[player.index - 1].position.x + 10
            
        }
        
        if(player.distance > 4349 && flag === 0){
            
            player.rank = player.rank + 1
            Player.updatePE(player.rank)
            gameState = 2;
        }


    }
    end(){
        
        console.log("game over!")
        this.updateGS(2)
        textSize(18);
        if(flag === 0){
        if(player.rank === 1){
           console.log("You Win. 1st place")
           flag = flag +1
        }
        else{
            console.log("You Lose")
            flag = flag + 1
         }
    }
}

}