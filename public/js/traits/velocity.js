import {Trait} from "../entity.js";

export default class Velocity extends Trait {
    constructor() {
        super("velocity");

    }

    update(entity, dt) {
        entity.pos.x += entity.vel.x * dt;
        entity.pos.y += entity.vel.y * dt;

    }
}
