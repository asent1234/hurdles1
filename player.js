class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
        this.rank = 0
    }
     getPC(){
        var pcrefer = database.ref('playerCount')
        pcrefer.on("value", function (data){
            playerCount = data.val();
        })
     }
     updatePC(count){
         var updatepcref = database.ref('/')
         updatepcref.update({
             playerCount :  count
         })
     }
     getPE(){
        var cerefer = database.ref('playerendnum')
        cerefer.on("value", (data) => {
            this.rank = data.val();
        })
     }
     static updatePE(count){
         var updateceref = database.ref('/')
         updateceref.update({
             carendnum :  count
         })
     }
     updatePlayerInfo(){
         var playerindex = "Players/player" + this.index
         var pindexref = database.ref(playerindex)
         pindexref.set({
            name : this.name,
            distance: this.distance
         })
     }
     
     static getAllPlayerInfo(){
         var playersref = database.ref("Players")
         playersref.on("value", (data) => {
            allPlayers = data.val();
         })
     }
}