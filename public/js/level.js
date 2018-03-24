import Compositor from "./compositor.js";
import TileCollider from "./tilecollider.js";
import {Matrix} from "./math.js";

export default class Level {
    constructor() {
         this.gravity = 2000;
        this.comp = new Compositor();
        this.entities = new Set();
        this.tiles = new Matrix();
        
        this.tileCollider = new TileCollider(this.tiles)
    }
    
    update(dt) {
        this.entities.forEach(entity => {
            entity.update(dt);
            
            
        entity.pos.x += entity.vel.x * dt;
            this.tileCollider.checkX(entity);
            
        entity.pos.y += entity.vel.y * dt;
this.tileCollider.checkY(entity);
            
            entity.vel.y+=this.gravity*dt;
        });
    }
}