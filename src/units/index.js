
export function getCanvasMousePosition(canvas, x, y) {
    let bbox = canvas.getBoundingClientRect();

    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    }
}

export function random(min, max) {
    return Math.random() * (max - min) + min;
}

export function brightColor() {
    return `rgb(${parseInt(random(0, 255))}, ${parseInt(random(0, 255))}, ${parseInt(random(0, 255))})`;
}

export function upperFirstCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export const isEmpty = function (str) {
    if (!str || str === "undefined" || JSON.stringify(str) == '{}') return true;
    return false;
}