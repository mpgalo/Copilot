import Ball from './ball.js';

let ball;

function setup() {
    console.log(ball);
    createCanvas(800, 400);
    ball = new Ball(width / 2, height / 2, 2, 2, 20);
    setRandomSpeed();
}

function draw() {
    background(220);
    ball.update();
    ball.draw();    
}

function setRandomSpeed() {
    ball.speedX = random(-5, 5);
    ball.speedY = random(-5, 5);
    return { speedX: ball.speedX, speedY: ball.speedY };
}

window.setup = setup; 
window.draw = draw;