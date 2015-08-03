var graphicsSystem = require('./systems/graphics');
var physicsSystem  = require('./systems/physics');
var inputSystem    = require('./systems/input');
var pipeSystem     = require('./systems/pipeRepeat');

var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var pipebottom = require('./entities/pipe-bottom');


var FlappyBird = function() {
	this.entities = [new bird.Bird()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics  = new physicsSystem.PhysicsSystem(this.entities);
	this.input    = new inputSystem.InputSystem(this.entities);
    this.pipeRepeat = new pipeSystem.PipeRepeatSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipeRepeat.run();
};

exports.FlappyBird = FlappyBird;


