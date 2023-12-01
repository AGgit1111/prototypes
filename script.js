function Particle() {
    this.x = 100;
    this.y = 99;
}

let p;

function setup() {
    createCanvas(600, 300);
    p = new Particle();
    console.log(p);
}