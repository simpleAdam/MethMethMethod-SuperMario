import Entity from "./entity.js";
import {loadMarioSprite} from "./sprites.js";

export function createMario() {
    return loadMarioSprite().then(sprite => {
        const mario = new Entity();
    mario.pos.set(64,180);
    mario.vel.set(20,-100);
    
    mario.draw = function drawMario(context) {
        sprite.draw("idle",context,this.pos.x,this.pos.y)
    };
    
    mario.update = function updateMario(dt) {
        this.pos.x+=this.vel.x*dt;
        this.pos.y+=this.vel.y*dt;
    };
        return mario;
    });

}