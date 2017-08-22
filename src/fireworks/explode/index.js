import Common from './common';
import Ball from '../../draw/ball';
import { random } from '../../units';
import Canvas, { canvas, context } from '../../draw/canvas';
class Explode {
    balls = []
    num = 50
    constructor(o) {
        Object.assign(this, o);
        this.addBalls();
    }
    addBalls() {
        const {target, color} = this;
        let balls = [],
            num = this.num;
        for (let i = 0; i < num; i++) {
            let ball = new Ball();
            ball.sx = target.x;
            ball.sy = target.y;
            ball.color = color;
            balls.push(ball);
        }
        this.balls = balls;
    }

    
    _move() {
        this.balls.forEach((ball, i) => {
            let c = 0;
            ball.sx += ball.vx;
            ball.sy += ball.vy;
            ball.vy += ball.gravity;
            ball.radius *= 0.96;
         //   ball.vx += Math.sin(random(-1, 1));
        //    ball.vy += Math.sin(random(-1, 1));
            ball.draw();
        })
    }

    _draw() {
        this.balls.forEach((ball, i) => {
            console.log(22)
            ball.draw();
        })
    }

    _remove() {
        const {balls} = this;
        for (let i = balls.length-1; i >= 0; i--) {
            let ball = balls[i];
            if (ball.radius < 1 || ball.sx < 0 || ball.sx > canvas.width || ball.sy >= canvas.height) {
                balls.splice(i, 1);
            }
        }
    }

    start() {
        this._move();
        this._remove();
    }
}

export default Explode;