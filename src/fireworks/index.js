//总入口 
import Canvas, { canvas, context } from '../draw/canvas';
import Fuse from './fuse';
import Explode from './explode';
class Index {
    fireWorks = []
    currentTime = new Date()
    timeSlice = 1000 / 60
    accumulation = 0
    constructor() {
        this.start = this.start.bind(this);
        this.add();
    }

    add() {
        Canvas.getMousePosition((target) => {
            this.fireWorks.push({
                status: 0,
                fuses: Fuse.addParabola(target),
                explodes: Explode.addBalls(target)
            })
        })
    }


    _move() {
        let { timeSlice, fireWorks } = this,
            nowTime = new Date(),
            passed = nowTime - this.currentTime;
        this.accumulation += passed;
        while (this.accumulation >= timeSlice) {
            for (let i = 0, len = fireWorks.length; i < len; i++) {
                let fireWork = fireWorks[i],
                    status = fireWork.status;
               
                    if (status == 0) {
                        fireWork.fuses.start();
                    } else {
                        Explode.start(fireWork.explodes);
                    } 
            }

            this._remove();
            this.accumulation -= passed;
        }
        this.currentTime = nowTime;
    }

    _remove() {
        let { fireWorks } = this;
        for (let i = fireWorks.length - 1; i >= 0; i--) {
            let fireWork = fireWorks[i];
            if (fireWork.fuses.status == -1) {
                fireWork.status = 1;
            } 
            if (fireWork.status == 1 && fireWork.explodes.length < 1) {
                this.fireWorks.splice(i, 1);
            }
        }
    }



    // 绘制引信
    _drawFuse() {
        Canvas.drawMainFromOffScreen(() => {
            Fuse.draw();
        })

    }
    // 绘制景色
    _drawScene() {
        Explode.start();
    }
    start() {
        Canvas.drawMainFromOffScreen(() => {
            this._move();
        })
        requestAnimationFrame(this.start);
    }
}

export default new Index();