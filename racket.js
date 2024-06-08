export default class Racket {
    constructor(x = 30, y = height / 2, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update(ball, isPlayer) {
        // Update the racket's position based on user input or game logic
        // For example, you can use keyboard events to move the player's racket up and down
        // You can also add collision detection logic here to check if the racket hits the ball

        // Example code:
        if (isPlayer) {
            if (keyIsDown(UP_ARROW)) {
                this.y -= 5; // Move the racket up by 5 units
            } else if (keyIsDown(DOWN_ARROW)) {
                this.y += 5; // Move the racket down by 5 units
            }
        } else {
            // Add logic for computer-controlled racket movement here
            // For example, you can use AI algorithms to determine the racket's movement
            // You can also add randomization to make the computer-controlled racket less predictable

            // Calculate the center of the racket
            let racketCenter = this.y + this.height / 2;

            // Move the racket towards the ball's y position
            if (ball.y < racketCenter) {
                this.y -= 3; // Move the racket up by 3 units
            } else if (ball.y > racketCenter) {
                this.y += 3; // Move the racket down by 3 units
            }
        }

        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > height - this.height) {
            this.y = height - this.height;
        }    

        
        // Check if the racket collides with the ball
        if (this.collidesWith(ball)) {
            // Handle the collision logic here
            // For example, you can change the ball's direction or increase the score
            // Example code:
            ball.changeDirection();
            //score.increase();
        }

        

    }

    // Function to check if the racket collides with the ball
    collidesWith(ball) {
        // Calculate the edges of the racket and the ball
        let racketLeft = this.x;
        let racketRight = this.x + this.width;
        let racketTop = this.y;
        let racketBottom = this.y + this.height;
        let ballLeft = ball.x - ball.radius;
        let ballRight = ball.x + ball.radius;
        let ballTop = ball.y - ball.radius;
        let ballBottom = ball.y + ball.radius;

        // Check if the edges overlap
        if (racketLeft < ballRight && racketRight > ballLeft && racketTop < ballBottom && racketBottom > ballTop) {
            return true; // Collision detected
        } else {
            return false; // No collision
        }
    }

    draw() {
        // Draw the racket on the canvas
        // For example, you can use the rect() function to draw a rectangle representing the racket

        // Example code:
        fill(255); // Set the fill color to white
        rect(this.x, this.y, this.width, this.height); // Draw the racket as a rectangle
    }
}