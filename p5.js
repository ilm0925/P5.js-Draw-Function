import DrawFuncntion from "./DrawFunction.js";


let quadratic_Function = function (p) {
    p.setup = () => {
        let speed = Number(document.querySelector("#speed").value);
        let A = 0.01 * Number(document.querySelector("#A-value").value);
        let B = Number(document.querySelector("#B-value").value) * 10;
        let C = Number(document.querySelector("#C-value").value) * 10;
        new DrawFuncntion(p,speed,A,B,C).quadraticFunction()
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
        // p.createCanvas(windowWidth, windowHeight);
       let speed = Number(document.querySelector("#speed").value);
       let A = Number(document.querySelector("#A-value").value) * 100;
       let B = Number(document.querySelector("#B-value").value) * 10;
       let C = Number(document.querySelector("#C-value").value) * 10;

        p.draw = () => new DrawFuncntion(p,speed,A,B,C).CosFunction()
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
    new p5(Cos_Function, "container");
});

//다시하기
document.querySelector("body > button").addEventListener("click", () => {
    location.reload();
});
