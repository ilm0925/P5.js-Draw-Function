import lib from "./lib.js";

export default class DrawFuncntion extends lib {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    Y = 0;
    RedY = 0;

    constructor(p, speed, A, B, C) {
        super();
        this.p = p;
        this.p.createCanvas(this.windowWidth, this.windowHeight);
        console.log(this.p);
        this.speed = speed;
        this.A = A;
        this.B = B;
        this.C = C;
        this.X = -(this.windowWidth / 2) - this.speed;
    }

    quadraticFunction() {
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-this.A * this.X ** 2,-(this.A * (this.X - this.B) ** 2) - this.C)
             //a(x-b) + c 근데 음수가 양수라서 + 대신 -
            this.Draw() 
            this.ExitPoint("이차함수")

        };
    }

    LinerFunction() {
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-(this.A * this.X),-(this.A * this.X) - this.B)
            this.Draw() 
            this.ExitPoint("일차함수")
        };
    }

    CosFunction() {
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-(Math.cos(this.degreeToRad(this.X)) * this.A),-(Math.cos(this.degreeToRad(this.X + this.B)) * this.A) - this.C)
            this.Draw() 
            this.ExitPoint("Cos함수")
        };
    }

    SinFunction() {
        this.p.draw = () => {
            this.SetBackground()
            this.setXY(-(Math.sin(this.degreeToRad(this.X)) * this.A),-(Math.sin(this.degreeToRad(this.X + this.B)) * this.A) - this.C)
            this.Draw() 
            this.ExitPoint("sin함수")
        };
    }

}
