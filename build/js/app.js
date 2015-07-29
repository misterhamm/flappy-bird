(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    console.log("Drawing a Bird");
    //Circle
    context.beginPath();
    context.fillStyle = "green";
    context.arc(200, 300, 50, 0, 2 * Math.PI);
    context.fill();

    //Rectangle
    context.beginPath();
    context.fillStyle = "blue";
    context.rect(10, 50, 50, 25);
    context.fill();

    //Line
    context.beginPath();
    context.strokeStyle = "orange";
    context.lineCap = "round";
	context.moveTo(0,100);
	context.lineWidth = 2;
	context.lineTo(100, 60);
	context.stroke();

	//Triangle
	context.beginPath();
	context.strokeStyle = "purple";
	context.moveTo(100, 100);
	context.lineTo(200, 100);
	context.lineTo(150, 150);
	context.closePath();
	context.stroke();

    //Text
    context.beginPath();
    context.fillStyle = "red";
    context.fillText("Circle 200, 300, 50", 10, 10);
    context.fillText("Rectangle 10, 50, 50, 25", 10, 20);
    context.fill();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
},{}],2:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/bird");

var Bird = function() {
    console.log("Creating Bird Entity");
    
    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    this.components = {
        graphics: graphics
    };
};

exports.Bird = Bird;
},{"../components/graphics/bird":1}],3:[function(require,module,exports){
var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/bird');

var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
};

exports.FlappyBird = FlappyBird;
},{"./entities/bird":2,"./systems/graphics":5}],4:[function(require,module,exports){
var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var app = new flappyBird.FlappyBird();
    app.run();
});
},{"./flappy_bird":3}],5:[function(require,module,exports){
var GraphicsSystem = function(entities) {
    this.entities = entities;
    // Canvas is where we draw
    this.canvas = document.getElementById('main-canvas');
    // Context is what we draw
    this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
    // Run the render loop
    window.requestAnimationFrame(this.tick.bind(this));
};

GraphicsSystem.prototype.tick = function() {
    console.log("I'm an IDE not a doctor, dammit.")
    
    // Set the canvas to the correct size if the window is resized
    if (this.canvas.width != this.canvas.offsetWidth ||
        this.canvas.height != this.canvas.offsetHeight) {
        this.canvas.width = this.canvas.offsetWidth; 
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    // Clear the Canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Rendering goes here
    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'graphics' in entity.components) {
            continue;
        }
    entity.components.graphics.draw(this.context);
    }
    
    // Continue the render loop
    window.requestAnimationFrame(this.tick.bind(this));
    
};

exports.GraphicsSystem = GraphicsSystem;
},{}]},{},[4]);
