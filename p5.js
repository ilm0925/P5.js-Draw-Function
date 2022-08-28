import DrawFuncntion from "./DrawFunction.js";

let speed = null;
let A_value = null;
let B_value = null;
let C_value = null;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


let quadratic_Function = function (p) {
    p.setup = () => {
        // p.background("black");
        let AddValue = Number(document.querySelector("#speed").value);
        let A = 0.01 * Number(document.querySelector("#A-value").value);
        let B = Number(document.querySelector("#B-value").value) * 10;
        let C = Number(document.querySelector("#C-value").value) * 10;
        let X = -(windowWidth / 2) - AddValue;
        let Y = 0;
        let RedY = 0;
        new DrawFuncntion(p,AddValue,A,B,C).quadraticFunction()
    };
};

let Liner_Function = function (p) {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        // p.background("black");
        AddValue = speed;
        A = A_value;
        X = -(windowWidth / 2) - AddValue;
        Y = 0;
        RedY = 0;
        p.draw = () => {
            LinerFunction(p);
        };
    };
};

let Sin_Function = function (p) {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        // p.background("black");
        AddValue = speed;
        A = A_value;
        X = -(windowWidth / 2) - AddValue;
        Y = 0;
        RedY = 0;
        p.draw = () => {
            SinFunction(p);
        };
    };
};

let Cos_Function = function (p) {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        AddValue = speed;
        A = A_value;
        X = -(windowWidth / 2) - AddValue;
        Y = 0;
        RedY = 0;
        p.draw = () => {
            CosFunction(p);
        };
    };
};

// 일차
document.querySelectorAll("button")[0].addEventListener("click", () => {
    setTimeout(() => {
        window.scroll(0, document.body.scrollHeight);
    }, 100);
    speed = Number(document.querySelector("#speed").value);
    A_value = Number(document.querySelector("#A-value").value);
    B_value = Number(document.querySelector("#B-value").value) * 10;
    new p5(Liner_Function, "container");
});
// 이차
document.querySelectorAll("button")[1].addEventListener("click", () => {
    setTimeout(() => {
        window.scroll(0, document.body.scrollHeight);
    }, 100);
    speed = Number(document.querySelector("#speed").value);
    A_value = 0.01 * Number(document.querySelector("#A-value").value);
    B_value = Number(document.querySelector("#B-value").value) * 10;
    C_value = Number(document.querySelector("#C-value").value) * 10;
    new p5(quadratic_Function, "container");
});
//Sin함수
document.querySelectorAll("button")[2].addEventListener("click", () => {
    setTimeout(() => {
        window.scroll(0, document.body.scrollHeight);
    }, 100);
    speed = Number(document.querySelector("#speed").value);
    A_value = Number(document.querySelector("#A-value").value) * 100;
    B_value = Number(document.querySelector("#B-value").value) * 10;
    C_value = Number(document.querySelector("#C-value").value) * 10;

    new p5(Sin_Function, "container");
});

//Cos함수
document.querySelectorAll("button")[3].addEventListener("click", () => {
    setTimeout(() => {
        window.scroll(0, document.body.scrollHeight);
    }, 100);
    speed = Number(document.querySelector("#speed").value);
    A_value = Number(document.querySelector("#A-value").value) * 100;
    B_value = Number(document.querySelector("#B-value").value) * 10;
    C_value = Number(document.querySelector("#C-value").value) * 10;

    new p5(Cos_Function, "container");
});

//다시하기
document.querySelector("body > button").addEventListener("click", () => {
    location.reload();
});
