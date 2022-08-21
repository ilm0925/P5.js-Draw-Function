speed = null;
A_value = null;
B_value = null;
C_value = null;
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

function degreeToRad(degree) {
    return degree * (Math.PI / 180);
}

function DrawLine(p, PX, PY, X, Y) {
    p.stroke(500);
    p.line(PX, PY, X, Y);
}
function DrawCircle(p, PX, PY, X, Y) {
    // p.fill(p.color(255, 204, 0));
    p.stroke("red");
    p.line(PX, PY, X, Y);
    p.stroke(0);
}
function coordinate(p) {
    p.stroke(255);
    p.strokeWeight(1);
    p.line(windowWidth / 2, 0, -windowWidth / 2, 0);
    p.line(0, windowHeight / 2, 0, -windowHeight / 2);
    p.stroke(0);
    // p.fill(239, 168, 68);
}

function quadraticFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    PY2 = RedY;
    RedY = -(A * (X - B_value) ** 2) - C_value;
    Y = -A * X ** 2; //a(x-b) + c 근데 음수가 양수라서 + 대신 -
    p.strokeWeight(2);
    DrawCircle(p, X - AddValue, PY2, X, RedY);
    DrawLine(p, X - AddValue, PY, X, Y);
}

function LinerFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    PY2 = RedY;
    RedY = -(A * X) - B_value;
    Y = -(A * X);
    p.strokeWeight(3);
    DrawCircle(p, X - AddValue, PY2, X, RedY);
    DrawLine(p, X - AddValue, PY, X, Y);
}

function CosFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    PY2 = RedY;
    RedY = -(Math.cos(degreeToRad(X - B_value)) * A_value) - C_value;
    Y = -(Math.cos(degreeToRad(X)) * A_value);
    p.strokeWeight(2);
    DrawCircle(p, X - AddValue, PY2, X, RedY);
    DrawLine(p, X - AddValue, PY, X, Y);
}

function SinFunction(p) {
    p.translate(windowWidth / 2, windowHeight / 2);
    coordinate(p);
    X += AddValue;
    PY = Y;
    PY2 = RedY;
    RedY = -(Math.sin(degreeToRad(X - B_value)) * A_value) - C_value;
    Y = -(Math.sin(degreeToRad(X)) * A_value);
    p.strokeWeight(2);
    DrawCircle(p, X - AddValue, PY2, X, RedY);
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
        RedY = 0;
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
        // p.background("black");
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
