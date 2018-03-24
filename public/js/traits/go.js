import {Trait} from "../entity.js";

export default class Go extends Trait {
    constructor() {
        super("go");

        this.dir =0;
        this.speed=6000;
    }
    
    update(entity, dt) {
        entity.vel.x=this.speed*this.dir*dt;
        if (this.engageTime > 0) {
            entity.vel.y = -this.velocity;
            this.engageTime -= dt;
        }
    }
}
