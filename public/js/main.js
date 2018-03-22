import Compositor from "./compositor.js";
import Entity from "./entity.js";
import Timer from "./timer.js";
import {loadLevel} from "./loaders.js";
import {createMario} from "./entities.js";
import {loadBackgroundSprites} from "./sprites.js";
import {createBackgroundLayer, createSpriteLayer}  from "./layers.js";


var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");


Promise.all([
    createMario(),
    loadBackgroundSprites("screen"),
    loadLevel("1-1"),
]).then(([mario,BackgroundSprites,level]) => {
    
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds,BackgroundSprites);
    comp.layers.push(backgroundLayer);
    
    const gravity = 30;
    mario.pos.set(64,180);
    mario.vel.set(200,-600);
    
    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);
    
    const timer = new Timer(1/60)
    timer.update = function update(deltaTime) {
        
        comp.draw(context);
        mario.vel.y+=gravity;
        mario.update(deltaTime);
        
    };
    
    timer.start();

});
       