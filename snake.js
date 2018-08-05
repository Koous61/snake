var GAME_SPEED = 1500;
var SNAKE_X = 10;
var SNAKE_Y = 10;
var gs = 20;
var tc = 20;
var POINT_X = 15;
var POINT_Y = 15;
var xv = 0;
var yv = 0;
var trail = [];
var tail = 5;


window.onload = function () {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, GAME_SPEED / 15);
};

function game() {
    SNAKE_X += xv;
    SNAKE_Y += yv;
    if (SNAKE_X < 0) {
        SNAKE_X = tc - 1;
    }
    if (SNAKE_X > tc - 1) {
        SNAKE_X = 0;
    }
    if (SNAKE_Y < 0) {
        SNAKE_Y = tc - 1;
    }
    if (SNAKE_Y > tc - 1) {
        SNAKE_Y = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x === SNAKE_X && trail[i].y === SNAKE_Y) {
            tail = 5;
        }
    }
    trail.push({x: SNAKE_X, y: SNAKE_Y});
    while (trail.length > tail) {
        trail.shift();
    }

    if (POINT_X === SNAKE_X && POINT_Y === SNAKE_Y) {
        tail++;
        POINT_X = Math.floor(Math.random() * tc);
        POINT_Y = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(POINT_X * gs, POINT_Y * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}