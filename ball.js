/**
 * Represents a ball object.
 */
export default class Ball {
    /**
     * Creates a new instance of the Ball class.
     * @param {number} x - The x-coordinate of the ball's position.
     * @param {number} y - The y-coordinate of the ball's position.
     * @param {number} speedX - The speed of the ball along the x-axis.
     * @param {number} speedY - The speed of the ball along the y-axis.
     * @param {number} radius - The radius of the ball.
     */
    constructor(x, y, speedX, speedY, radius) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
    }

    /**
     * Updates the ball's position and checks for boundary collisions.
     */
    update() {
        this.move();
        this.checkBoundary();
    }

    /**
     * Draws the ball on the canvas.
     */
    draw() {
        fill(165, 42, 42);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    /**
     * Moves the ball based on its speed.
     */
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    /**
     * Checks if the ball has collided with the canvas boundaries and updates its position accordingly.
     */
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