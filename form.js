class Form{
    constructor(){
        this.inputbox = createInput("Enter Your Name")
        this.button = createButton("Register/Submit")
        this.greeting = createElement("h3")
        this.fullscreenbutton  = createButton("Fullscreen")
        this.resetbutton = createButton("Reset Database")
    }
    display(){
        var title = createElement("h2")
        title.html("Multiplayer Hurdles Game")
        title.position(130, 0) 
        
        
        this.inputbox.position(130, 160)
        this.resetbutton.position(100,100)
       
        this.button.position(250, 200)

        //this.fullscreenbutton.position(500, 500)

        this.button.mousePressed(() =>{
            player.name = this.inputbox.value();
            
            playerCount = playerCount + 1
            player.index = playerCount
            player.updatePC(playerCount)
            if(player.name === "Enter Your Name"){
                player.name = "Anonymous"
            }
            player.updatePlayerInfo() 

            this.greeting.html("Hello Player "+ playerCount+ ", "+ player.name)
            this.greeting.position(130,160)
        })
        //this.fullscreenbutton.mousePressed(() =>{
         //   screenState = 1
        //})
        this.resetbutton.mousePressed(() =>{
           game.updateGS(0);
           player.updatePC(0);
           
        })
    }
    hide(){
    this.inputbox.hide();
    this.button.hide();
    this.greeting.hide();
    }
}