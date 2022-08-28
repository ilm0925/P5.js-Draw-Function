import lib from "./lib.js";

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
        this.speed = speed;
        this.A = A_value;
        this.B = B_value;
        this.C = C_value;
        this.X = -(this.windowWidth / 2) - this.speed;
    }

    quadraticFunction() {
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-this.A * this.X ** 2,-(this.A * (this.X - this.B) ** 2) - this.C)
             //a(x-b) + c 근데 음수가 양수라서 + 대신 -
            this.p.strokeWeight(2);

            this.DrawCircle(this.X - this.speed, this.PY2, this.X, this.RedY);
            this.DrawLine(this.X - this.speed,this.PY, this.X, this.Y);
        };
    }

    LinerFunction() {
        // this.p.translate(this.windowWidth / 2, this.windowHeight / 2);
        // this.coordinate(this.windowWidth, this.windowHeight);
        // this.X += this.speed;
        // this.PY = this.Y;
        // this.PY2 = this.RedY;
        // this.RedY = -(this.A * this.X) - this.B;
        // Y = -(A * this.X);
        // this.p.strokeWeight(3)
        // DrawCircle(this.X - speed, this.PY2, this.X, this.RedY);
        // DrawLine(this.X - AddValue,this.PY, this.X, Y);
        // if (this.X > windowWidth / 2) {
        //     console.log("일차함수 종료");
        //     p.noLoop();
        //     return;
        // }
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-(this.A * this.X),-(this.A * this.X) - this.B)
             //a(x-b) + c 근데 음수가 양수라서 + 대신 -
            this.p.strokeWeight(2);
            
            this.DrawCircle(this.X - this.speed, this.PY2, this.X, this.RedY);
            this.DrawLine(this.X - this.speed,this.PY, this.X, this.Y);
        };
    }

    CosFunction() {
        this.p.draw = () => {
        this.p.translate(this.windowWidth / 2, this.windowHeight / 2);
        this.coordinate(this.windowWidth, this.windowHeight);
        this.X += this.speed;
        this.PY = this.Y;
        this.PY2 = this.RedY;
        this.RedY = -(Math.cos(this.degreeToRad(this.X + this.B)) * this.A) - this.C;
        this.Y = -(Math.cos(this.degreeToRad(this.X)) * this.A);
        this.p.strokeWeight(2);
        this.DrawCircle(this.X - this.speed, this.PY2, this.X, this.RedY);
        this.DrawLine(this.X - this.speed,this.PY, this.X, this.Y);
        if (this.X > this.windowWidth / 2) {
            console.log("Cos함수 종료");
            p.noLoop();
            return;
        }
        }
    }

    SinFunction() {
        this.p.draw = () => {
            this.p.translate(this.windowWidth / 2, this.windowHeight / 2);
            this.coordinate(this.windowWidth, this.windowHeight);
            this.X += this.speed;
            this.PY = this.Y;
            this.PY2 = this.RedY;
            this.RedY =
                -(Math.sin(this.degreeToRad(this.X + B_value)) * A_value) - C_value;
            Y = -(Math.sin(this.degreeToRad(this.X)) * A_value);
            this.p.strokeWeight(2);
            this.DrawCircle(this.X - speed, this.PY2, this.X, this.RedY);
            this.DrawLine(this.X - this.speed,this.PY, this.X, Y);
            if (this.X > windowWidth / 2) {
                console.log("Sin함수 종료");
                p.noLoop();
                return;
            }
        }
    }
}
