import Canvas, { canvas, context, offscreenCanvas, offscreenContext } from '../../draw/canvas';
import Parabola from './parabola';
import { random, brightColor } from '../../units';
class Fuse {

    constructor() {
    }

    addParabola(target) {
        let parabola = new Parabola({
            a: random(0.005, 0.009),
            color: brightColor(),
            tx: target.x,
            ty: target.y,
            speed: random(50, 150),
            sx: canvas.width / 2
        });
        return parabola;
    }

    _move(fireWork) {
        const { parabolas } = this;
        for (let i = parabolas.length - 1; i >= 0; i--) {
            let parabola = parabolas[i];
            parabola.start();
            this._remove(parabola, i, fireWork);
        }
    }

    _remove(parabola, i, fireWork) {
        if (parabola.status != -1) return false;
        this.parabolas.splice(i, 1);
        fireWork.status = 1;
    }

    _draw(fireWork) {
        Canvas.drawMainFromOffScreen(() => {
            this._move(fireWork);
        })
    }

}

export default new Fuse();