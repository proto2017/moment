import { CLIENT_HEIGHT, CLIENT_WIDTH } from '../units/global';
import { getCanvasMousePosition, upperFirstCase } from '../units';
class Canvas {
    mousePosition = { x: 0, y: 0 }
    constructor() {

        this._create({
            name: 'canvas',
            context: 'context',
            id: '#firework',
            globalAlpha: 0.85
        });
    }

    _create({ name, context, id, globalAlpha }) {
        this._main({ name, context, id, globalAlpha });

        this._offScreen({ name, context, context });
    }

    _main({ name, context, id, globalAlpha }) {

        this[name] = document.querySelector(id);
        this[context] = this[name].getContext('2d');

        this._setStyle(name);

        // 这个变量一定要在高宽设置好之后才能生效
        this[context].globalAlpha = 0.85;
    }

    _offScreen({ name, context }) {

        const canvasName = "offscreen" + upperFirstCase(name),
            contextName = "offscreen" + upperFirstCase(context);

        this[canvasName] = document.createElement("canvas");
        this[contextName] = this[canvasName].getContext("2d");

        this._setStyle(canvasName);
    }

    _setStyle(canvasName) {

        this[canvasName].width = CLIENT_WIDTH * 2;
        this[canvasName].height = CLIENT_HEIGHT * 2;

        this[canvasName].style.width = CLIENT_WIDTH + "px";
        this[canvasName].style.height = CLIENT_HEIGHT + "px";
    }


    getMousePosition(cb) {
        const { canvas } = this;
        canvas.addEventListener("mousedown", e => {
            this.mousePosition = getCanvasMousePosition(canvas, e.clientX, e.clientY);
            this.mousePosition.x *= 2;
            this.mousePosition.y *= 2;
            console.log("鼠标位置", this.mousePosition);
            cb && cb(this.mousePosition);
        }, false);
    }



    strokeArc({
        color, tx, ty, radius
    }) {
        context.save();
        context.beginPath();
        context.lineWidth = 2;
        context.translate(tx, ty);
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
        context.closePath();
        context.restore();
    }

    fillArc({
        sx, sy, mx, my, radius, color
    }) {
        context.save();
        context.beginPath();
        context.translate(sx, sy);
        context.arc(mx, my, radius, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
        context.closePath();
        context.restore();
    }

    drawMainFromOffScreen(cb) {
        const { offscreenContext, context, canvas } = this;
        offscreenContext.globalCompositeOperation = "copy";
        offscreenContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
        context.clearRect(0, 0, canvas.width, canvas.height);
        cb && cb();
        context.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    clear() {
        const { context } = this;
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
const can = new Canvas();
export default can;
export const { canvas, context, offscreenCanvas, offscreenContext } = can;

