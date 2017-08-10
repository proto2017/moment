import { CLIENT_HEIGHT, CLIENT_WIDTH } from '../units/global';
import { getCanvasMousePosition } from '../units';
class Canvas {
    context = null
    canvas = null
    mousePosition = { x: 0, y: 0 }
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = CLIENT_WIDTH * 2;
        this.canvas.height = CLIENT_HEIGHT * 2;
        this.canvas.style.width = CLIENT_WIDTH + "px";
        this.canvas.style.height = CLIENT_HEIGHT + "px";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 9999;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.context.globalAlpha = 0.85;
        this.createOffScreenCanvas();
       
    }


    createOffScreenCanvas() {
        this.offscreenCanvas = document.createElement("canvas");
        this.offscreenContext = this.offscreenCanvas.getContext("2d");
        this.offscreenCanvas.width = CLIENT_WIDTH * 2;
        this.offscreenCanvas.height = CLIENT_HEIGHT * 2;
        this.offscreenCanvas.style.width = CLIENT_WIDTH + "px";
        this.offscreenCanvas.style.height = CLIENT_HEIGHT + "px";
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

    auxiliary() {
        
    }

    clear() {
        const { context } = this;
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
const can = new Canvas();
export default can;
export const { canvas, context, offscreenCanvas, offscreenContext } = can;

