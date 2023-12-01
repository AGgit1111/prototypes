/* Prototypes
    Every JavaScript function has a prototype property (except arrow functions), which is an object.
    When you create an object using a constructor function with the new keyword, the newly created
    object inherits properties and methods from the constructor function's prototype. */
function Particle() {
    this.x = 100;
    this.y = 99;
}
// Adding a method to Particle's prototype.
Particle.prototype.show = function () {
    console.log(`Particle at x: ${this.x}, y: ${this.y}`);
};

let p = new Particle();
p.show(); // Logs: Particle at x: 100, y: 99

/* Inheritance
    Inheritance allows one object to acquire the properties and methods of another. In JavaScript, this
    is achieved through the prototype chain. */
function MovingParticle() {
    // Call the Particle constructor
    Particle.call(this);
    // Additional property specific to MovingParticle
    this.velocity = 5;
}
// Inheriting from Particle
MovingParticle.prototype = Object.create(Particle.prototype);
MovingParticle.prototype.update = function () {
    this.x += this.velocity; // Adding velocity number to x (105)
    console.log(`Particle at x: ${this.x}, y: ${this.y}`);
}
/* In this setup, MovingParticle inherits from Particle. Here's what happens:

    Particle.call(this); ensures that the Particle constructor is called when a new MovingParticle is created, setting up the x and y properties.
    MovingParticle.prototype = Object.create(Particle.prototype); sets up the prototype chain, so MovingParticle instances inherit from Particle.
    MovingParticle.prototype.constructor = MovingParticle; resets the constructor property on the prototype, which otherwise points to Particle. */

// Now, instances of MovingParticle have access to methods from both MovingParticle and Particle:
let mp = new MovingParticle();
mp.show(); // Inherited from Particle
mp.update(); // Specific to MovingParticle