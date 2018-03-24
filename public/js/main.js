
import Entity from "./entity.js";
import Timer from "./timer.js";
import {loadLevel} from "./loaders.js";
import {createMario} from "./entities.js";
import {createCollisionLayer} from "./layers.js";
import {setupKeyboard} from "./input.js"



var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

Promise.all([
    createMario(),
    loadLevel("1-1"),
]).then(([mario,level]) => {
    
   
    mario.pos.set(64,160);
    
    level.comp.layers.push(createCollisionLayer(level));
    
    level.entities.add(mario);
    
    const input = setupKeyboard(mario)
    
    
input.listenTo(window);
    
    ["mousedown","mousemove"].forEach(eventName => {
        canvas.addEventListener(eventName, event => {
            //alert("You pressed button: " + event.button)
            if (event.button==1){
                mario.vel.set(0,0);
                mario.pos.set(event.offsetX,event.offsetY);}
            
        })
        })
    
    
    const timer = new Timer(1/60)
    timer.update = function update(deltaTime) {
        
        level.comp.draw(context);
        
        level.update(deltaTime);
        
    };
    
    timer.start();

});
       