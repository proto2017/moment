import Canvas, { canvas, context, offscreenCanvas, offscreenContext } from '../../draw/canvas';
import Parabola from './parabola';
import { random, brightColor } from '../../units';
class Fuse {

    constructor(o) {
        Object.assign(this, o);
        this.addParabola();
    }

    addParabola() {
        const {target, color} = this;
        this.parabola = new Parabola({
            a: random(0.005, 0.009),
            color,
            tx: target.x,
            ty: target.y,
            speed: random(100, 250),
            sx: canvas.width / 2
        });
    }

    _move() {
        const { parabola } = this;
        parabola.start();
    }

    start() {
        this._move();
    }

}

export default Fuse;