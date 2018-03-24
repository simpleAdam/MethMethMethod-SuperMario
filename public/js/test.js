class Compositor {
    constructor() {
        this.layers = [];
    }
    draw(context) {
        this.layers.forEach(layer => {
            layer(context);
        });
    }
}

class Level {
    contructor() {
        this.mine =5;
        this.comp = new Compositor();
        this.entities = new Set();
    }
}

const level = new Level();

level.comp.layers.push("jkj");