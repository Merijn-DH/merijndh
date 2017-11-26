let planets = [];
let star = {
    x: 250,
    y: 250,
    r: 150,
    mass: 150
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    star.x = width/2;
    star.y = height/2;
}

function draw() {
    background(0);
    fill(255);
    ellipse(star.x,star.y,star.r, star.r);
    for (let i = 0; i < planets.length; i ++) {
        planets[i].applyGravity();
        planets[i].update();
        if (planets[i].crashed()) {
            planets.splice(i, 1);
            i = i - 1;
        } else {
            planets[i].show();
        }
    }
}

function mousePressed() {
    if (mouseX > 0 || mouseY > 0) {
        let newPlanet = new planet(mouseX, mouseY);
        planets.push(newPlanet);
    }
}
