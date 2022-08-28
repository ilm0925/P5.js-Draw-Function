import lib from "./lib.js"

export default class DrawFuncntion extends lib {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    Y = 0;
    RedY = 0;

    constructor(p, speed, A_value, B_value, C_value) {
        super(p);
        this.p = p;
        this.p.createCanvas(this.windowWidth, this.windowHeight);
        console.log(this.p);
        this.AddValue = speed;
        this.A = A_value;
        this.B = B_value;
        this.C = C_value;
        this.X = -(this.windowWidth / 2) - this.AddValue;
    }

    quadraticFunction() {
        this.p.draw = () => {
            this.p.translate(this.windowWidth / 2, this.windowHeight / 2);
            this.coordinate(this.windowWidth, this.windowHeight);
            this.X += this.AddValue;
            this.PY = this.Y;
            this.PY2 = this.RedY;
            this.RedY = -(this.A * (this.X - this.B) ** 2) - this.C;
            this.Y = -this.A * this.X ** 2; //a(x-b) + c 근데 음수가 양수라서 + 대신 -
            this.p.strokeWeight(2);

            this.DrawCircle(
                this.X - this.AddValue,
                this.PY2,
                this.X,
                this.RedY
            );

            this.DrawLine(
                this.X - this.AddValue,
                this.PY,
                this.X, 
                this.Y
                );

            if (this.X > this.windowWidth / 2) {
                console.log("이차함수 종료");
                this.p.noLoop();
                return;
            }
        };
    }

    LinerFunction(p) {
        this.p.translate(windowWidth / 2, windowHeight / 2);
        coordinate(p);
        X += AddValue;
        PY = Y;
        PY2 = RedY;
        RedY = -(A * X) - B_value;
        Y = -(A * X);
        p.strokeWeight(3);
        DrawCircle(p, X - AddValue, PY2, X, RedY);
        DrawLine(p, X - AddValue, PY, X, Y);
        if (X > windowWidth / 2) {
            console.log("일차함수 종료");
            p.noLoop();
            return;
        }
    }

    CosFunction(p) {
        this.p.translate(windowWidth / 2, windowHeight / 2);
        coordinate(p);
        X += AddValue;
        PY = Y;
        PY2 = RedY;
        RedY = -(Math.cos(degreeToRad(X + B_value)) * A_value) - C_value;
        Y = -(Math.cos(degreeToRad(X)) * A_value);
        p.strokeWeight(2);
        DrawCircle(p, X - AddValue, PY2, X, RedY);
        DrawLine(p, X - AddValue, PY, X, Y);
        if (X > windowWidth / 2) {
            console.log("Cos함수 종료");
            p.noLoop();
            return;
        }
    }

    SinFunction() {
        this.p.translate(windowWidth / 2, windowHeight / 2);
        coordinate(this.p);
        X += AddValue;
        PY = Y;
        PY2 = RedY;
        RedY = -(Math.sin(degreeToRad(X + B_value)) * A_value) - C_value;
        Y = -(Math.sin(degreeToRad(X)) * A_value);
        p.strokeWeight(2);
        DrawCircle(p, X - AddValue, PY2, X, RedY);
        DrawLine(p, X - AddValue, PY, X, Y);
        if (X > windowWidth / 2) {
            console.log("Sin함수 종료");
            p.noLoop();
            return;
        }
    }
}
