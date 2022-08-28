export default class lib {
    constructor(p) {
        this.p = p;
    }

    coordinate(windowWidth, windowHeight) {
        this.p.stroke(255);
        this.p.strokeWeight(1);
        this.p.line(windowWidth / 2, 0, -windowWidth / 2, 0);
        this.p.line(0, windowHeight / 2, 0, -windowHeight / 2);
        this.p.stroke(0);
    }
    degreeToRad(degree) {
        return degree * (Math.PI / 180);
    }

    DrawLine(PX, PY, X, Y) {
        this.p.stroke(500);
        this.p.line(PX, PY, X, Y);
    }
    DrawCircle(PX, PY, X, Y) {
        console.log(PX, PY);
        this.p.stroke("red");
        this.p.line(PX, PY, X, Y);
        // this.p.stroke(0);
    }
    setXY(CaculatedY,Caculated_REDY){
        this.X += this.speed;
        this.PY = this.Y;
        this.PY2 = this.RedY;
        this.RedY = Caculated_REDY
        this.Y = CaculatedY
    }

    SetBackground(){
        this.p.translate(this.windowWidth / 2, this.windowHeight / 2)
        this.coordinate(this.windowWidth, this.windowHeight);
    }
}
