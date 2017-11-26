class planet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 25;
        this.vx = 3.0;
        this.vy = 0.0;
        this.mass = 25;
        this.ax = 0.0;
        this.ay = 0.0;
    }
    applyGravity() {
        let distance = dist(this.x, this.y, star.x, star.y);
        let force = ((this.mass * star.mass) / pow(distance, 2));
        let ratio = force/distance;

        this.ax = (star.x - this.x) * ratio;
        this.ay = (star.y - this.y) * ratio;
        this.vx += this.ax;
        this.vy += this.ay;     
        //this.vx += this.ax;
        //this.vy += this.ay;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    crashed() {
        if (dist(this.x, this.y, star.x, star.y) < star.r/2) {
            return true;
        }
        return false;
    }
    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
    }
}