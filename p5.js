let sketch = function (p) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        // p.background("black");
        AddValue = 10;
        A = 2;
        X = -(windowWidth / 2) - AddValue;
        Y = 0;
    };

    function degreeToRad(degree) {
        return degree * (Math.PI / 180);
    }

    function CosFunc(X) {
        return Math.cos(X) * 200; // 함수(Y값)
    }

    function coordinate() {
        p.fill(239, 168, 68);
        p.line(windowWidth / 2, 0, -windowWidth / 2, 0);
        p.line(0, windowHeight / 2, 0, -windowHeight / 2);
        p.stroke(400);
        p.fill(239, 168, 68);
    }

    // p.draw = () => {
    //     p.translate(windowWidth / 2, windowHeight / 2);
    //     coordinate();
    //     X += AddValue;
    //     PY = Y;
    //     Y = -CosFunc(degreeToRad(X));
    //     console.log(Y);
    //     p.line(X - AddValue, PY, X, Y);
    //     p.stroke(500);
    //     p.fill("red");
    //     p.circle(X, -CosFunc(degreeToRad(X)), 10);
    // };

    p.draw = () => {
        p.translate(windowWidth / 2, windowHeight / 2);
        coordinate();
        X += AddValue;
        PY = Y;
        Y = -(0.03 * X ** 2);
        p.line(X - AddValue, PY, X, Y);
        p.stroke(500);
        // p.fill(255, 155, 15);
        p.fill("red");
        p.circle(X, Y, 10);
    };
};
new p5(sketch, "container");
