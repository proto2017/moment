import Canvas from './canvas';
import { brightColor, random } from '../units';
class Ball {
    sx = 0
    sy = 0
    mx = 0
    my = 0
    radius = 10
    color = brightColor()
    vx = random(-10, 10)
    vy = random(-20, -10)
    gravity = 0.95
    constructor(o) {
        Object.assign(this, o);
    }
    draw() {
        const { sx, sy, mx, my, radius, color } = this;
        Canvas.fillArc({ sx, sy, mx, my, radius, color });
    }
}

export default Ball;