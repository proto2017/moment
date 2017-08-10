import Canvas, { canvas, context, offscreenCanvas, offscreenContext } from '../../draw/canvas';
import Parabola from './parabola';
import { random, brightColor } from '../../units';
class Fuse {

    parabolas = []
    constructor() {
        this._getTargetPosition();
    }

    _getTargetPosition() {
        Canvas.getMousePosition((target) => {
            this._addParabola(target);
        })
    }

    _addParabola(target) {
        let parabola = new Parabola({
            a: random(0.005, 0.009),
            color: brightColor(),
            tx: target.x,
            ty: target.y,
            speed: random(50, 150)
        });
        this.parabolas.push(parabola);
        console.log(this.parabolas);
    }

    _move() {
        const { parabolas } = this;
        for (let i = parabolas.length - 1; i >= 0; i--) {
            let parabola = parabolas[i];
            parabola.start();
            this._remove(parabola, i);
        }
    }

    _remove(parabola, i) {
        if (parabola.status != -1) return false;
        this.parabolas.splice(i, 1);
    }

    draw() {
        offscreenContext.globalCompositeOperation = "copy";
        offscreenContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
        Canvas.clear();
        this._move();
        context.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

}

export default new Fuse();