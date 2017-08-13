
import Canvas from '../../draw/canvas';
import { random } from '../../units';
import Ball from '../../draw/ball';
class Common {
    
    num = 50
    balls = []
    constructor() {
      //  this.addBalls();
    }
    
    

    _move() {
        const {balls} = this;
        balls.forEach((ball, i) => {
            ball.x += ball.vx;
            ball.y += ball.vy;
            ball.vy += ball.gravity;
        })
    }
    _draw() {
        const {balls} = this;
        balls.forEach((ball, i) => {
            ball.draw();
        })
    }

    start() {
        balls.forEach();
    }

}

export default new Common();