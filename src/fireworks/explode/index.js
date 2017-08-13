import Common from './common';
import Ball from '../../draw/ball';
import Canvas, { canvas, context } from '../../draw/canvas';
class Explode {
    balls = []
    num = 50
    constructor() {

    }
    addBalls(target) {
        let balls = [],
            num = this.num;
        for (let i = 0; i < num; i++) {
            let ball = new Ball();
            ball.sx = target.x;
            ball.sy = target.y;
            balls.push(ball);
        }
        return balls;
    }

    
    _move(balls) {
        balls.forEach((ball, i) => {
            ball.sx += ball.vx;
            ball.sy += ball.vy;
            ball.vy += ball.gravity;
            ball.radius -= 0.1;
        })
    }


    _draw(balls) {
        balls.forEach((ball, i) => {
            ball.draw();
        })
    }

    _remove(balls) {
        for (let i = balls.length-1; i >= 0; i--) {
            let ball = balls[i];
            if (ball.radius < 0 || ball.sx < 0 || ball.sx > canvas.width || ball.sy >= canvas.height) {
                balls.splice(i, 1);
            }
        }
    }

    start(balls) {
        this._move(balls);
        this._draw(balls);
        this._remove(balls);
    }
}

export default new Explode();