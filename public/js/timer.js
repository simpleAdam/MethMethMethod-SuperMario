export default class Timer {
    constructor(deltaTime = 1 / 60) {
        let lastTime = 0;
        let accumulatedTime = 0;

       this.updateProxy = (time) => {

            accumulatedTime += (time - lastTime) / 1000;

            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);
                accumulatedTime -= deltaTime;
            }
            //setTimeout(update, 1000 / 60, performance.now());
            //requestAnimationFrame(update);

            lastTime = time;
           
           this.enqueue();
        }
    }
    
    enqueue() {
        requestAnimationFrame(this.updateProxy)
    }
    
    start() {
        this.enqueue();
    }
}
