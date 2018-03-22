import Compositor from "./compositor.js";
import {loadLevel} from "./loaders.js";
import {loadMarioSprite, loadBackgroundSprites} from "./sprites.js";
import {createBackgroundLayer}  from "./layers.js"


var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        for (let i=0;i<20;++i){
            sprite.draw("idle",context,pos.x+i*16,pos.y)
        }
    };
}

Promise.all([
    loadMarioSprite(),
    loadBackgroundSprites("screen"),
    loadLevel("1-1"),
]).then(([marioSprite,BackgroundSprites,level]) => {
    
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds,BackgroundSprites);
    comp.layers.push(backgroundLayer);
    
    
    const pos = {
        x:0, y:0,
    };
    
    const spriteLayer = createSpriteLayer(marioSprite, pos)
    comp.layers.push(spriteLayer)
    
    function update() {
        comp.draw(context);
        
        pos.x+=0.2;
        pos.y+=0.2;
        requestAnimationFrame(update)
    }
    
    update();

});
       