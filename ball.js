export default class Ball {
    constructor(x, y, speedX, speedY, radius) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
    }

    update() {
        this.move();
        this.checkBoundary();
    }

    draw() {
        fill(165, 42, 42);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    checkBoundary() {
        if (this.x + this.radius >= width || this.x - this.radius <= 0) {
            this.speedX *= -1;
            this.x = width / 2;
            this.y = height / 2;
        }

        if (this.y + this.radius >= height || this.y - this.radius <= 0) {
            this.speedY *= -1;
        }
    }
}