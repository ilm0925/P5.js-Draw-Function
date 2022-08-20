speed = null;
A_value = null;
B_value = null;
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

function degreeToRad(degree) {
    return degree * (Math.PI / 180);
}

function CosFunc(X) {
    return Math.cos(X) * 200; // 함수(Y값)
}
function DrawLine(p, PX, PY, X, Y) {
    p.line(PX, PY, X, Y);
    p.stroke(500);
    p.fill("red");
    p.circle(X, Y, 10);
}
function coordinate(p) {
    p.fill(239, 168, 68);
    p.line(windowWidth / 2, 0, -windowWidth / 2, 0);
    p.line(0, windowHeight / 2, 0, -windowHeight / 2);
    p.stroke(400);
    p.fill(239, 168, 68);
}

function quadraticFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    Y = -(A * X ** 2);
    DrawLine(p, X - AddValue, PY, X, Y);
}

function LinerFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    Y = -(A * X + B_value);
    DrawLine(p, X - AddValue, PY, X, Y);
}

let quadratic_Function = function (p) {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        // p.background("black");
        AddValue = speed;
        A = A_value;
        X = -(windowWidth / 2) - AddValue;
        Y = 0;
        p.draw = () => {
            quadraticFunction(p);
        };
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
        p.draw = () => {
            LinerFunction(p);
        };
    };
};

// 이차
document
    .querySelector("body > div.btn-box.grid > div:nth-child(2) > button")
    .addEventListener("click", () => {
        setTimeout(() => {
            window.scroll(0, document.body.scrollHeight);
        }, 1000);
        speed = Number(document.querySelector("#speed").value);
        A_value = 0.01 * Number(document.querySelector("#A-value").value);
        new p5(quadratic_Function, "container");
    });

// 일차
document
    .querySelector("body > div.btn-box.grid > div:nth-child(1) > button")
    .addEventListener("click", () => {
        setTimeout(() => {
            window.scroll(0, document.body.scrollHeight);
        }, 1000);
        speed = Number(document.querySelector("#speed").value);
        A_value = Number(document.querySelector("#A-value").value);
        B_value = Number(document.querySelector("#B-value").value)*10;
        new p5(Liner_Function, "container");
    });

//다시하기
document.querySelector("body > button").addEventListener("click", () => {
    location.reload();
});
