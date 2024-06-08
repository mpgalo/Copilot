import Ball from './ball.js';
import Racket from './racket.js';

let ball;
let player;
let computer;

function setup() {
    console.log(ball);
    createCanvas(800, 400);
    ball = new Ball(width / 2, height / 2, 2, 2, 20);
    setRandomSpeed();
    player = new Racket(20, height / 2, 10, 60);
    computer = new Racket(width - 40, height / 2, 10, 60);
}

function draw() {
    background(220);
    ball.update();
    ball.draw();
    player.update(ball, true);
    player.draw();
    computer.update(ball, false);
    computer.draw();
}

function setRandomSpeed() {
    ball.speedX = random(-5, 5);
    ball.speedY = random(-5, 5);
    return { speedX: ball.speedX, speedY: ball.speedY };
}

window.setup = setup;
window.draw = draw;