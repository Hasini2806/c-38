class Form{
    constructor(){
        this.input = createInput("hasini")
       this.button = createButton("click to play")
       this.greeting = createElement('h2')
    }      
 hide(){
   this.button.hide();
   this.input.hide();
   this.greeting.hide();  
 }
 
    display(){
var title = createElement('h1')
title.position(displayWidth/2,100)
title.html("car racing")

this.input.position(displayWidth/2,displayHeight/3)

this.button.position(displayWidth/2,displayHeight/2.5)

this.greeting.position(400,300)


this.button.mousePressed(()=>{
    this.button.hide();
    this.input.hide();

    player.name = this.input.value();

    

    playerCount+=1;
    player.index = playerCount
    player.update();
    player.updateCount(playerCount)
    this.greeting.html("Welcome "+name)


})
    
    


   
 }
}
