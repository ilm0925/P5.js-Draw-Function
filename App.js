import DrawFuncntion from "./DrawFunction.js";

export default class App {
    constructor(p){
        setTimeout(() => {
            window.scroll(0, document.body.scrollHeight);
        }, 100);
    }

    quadratic_Function = function (p) {
        console.log(p)
        p.setup = () => {
            let speed = Number(document.querySelector("#speed").value);
            let A = 0.01 * Number(document.querySelector("#A-value").value);
            let B = Number(document.querySelector("#B-value").value) * 10;
            let C = Number(document.querySelector("#C-value").value) * 10;
            new DrawFuncntion(p, speed, A, B, C).quadraticFunction();
        };
    };

    Liner_Function = function (p) {
        p.setup = () => {
            let speed = Number(document.querySelector("#speed").value);
            let A = Number(document.querySelector("#A-value").value);
            let B = Number(document.querySelector("#B-value").value) * 10;
            new DrawFuncntion(p, speed, A, B, 0).LinerFunction();
        };
    };

    Sin_Function = function (p) {
        p.setup = () => {
            // p.createCanvas(windowWidth, windowHeight);
            let speed = Number(document.querySelector("#speed").value);
            let A = Number(document.querySelector("#A-value").value) * 100;
            let B = Number(document.querySelector("#B-value").value) * 10;
            let C = Number(document.querySelector("#C-value").value) * 10;

            p.draw = () => new DrawFuncntion(p, speed, A, B, C).SinFunction();
        };
    };

    Cos_Function = function (p) {
        p.setup = () => {
            // p.createCanvas(windowWidth, windowHeight);
            let speed = Number(document.querySelector("#speed").value);
            let A = Number(document.querySelector("#A-value").value) * 100;
            let B = Number(document.querySelector("#B-value").value) * 10;
            let C = Number(document.querySelector("#C-value").value) * 10;

            p.draw = () => new DrawFuncntion(p, speed, A, B, C).CosFunction();
        };
    };
}