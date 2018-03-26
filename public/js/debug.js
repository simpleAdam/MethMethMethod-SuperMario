export function setupMouseControl(canvas,entity,camera) {
    
    
["mousedown","mousemove"].forEach(eventName => {
    let lastEvent
        canvas.addEventListener(eventName, event => {
            
            if (event.button===1){
                entity.vel.set(0,0);
                entity.pos.set(event.offsetX +camera.pos.x,
                              event.offsetY +camera.pos.y);
            } else if (event.button===2 && lastEvent && lastEvent.button===2 && lastEvent.type=="mousemove") {
                
                camera.pos.x -= event.offsetX -(lastEvent.offsetX || 0);
                       }
            lastEvent=event
        });
        });
    
    canvas.addEventListener('contextmenu', e => {
                            e.preventDefault();
                            });
}