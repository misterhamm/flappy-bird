var graphicsComponent = require("../components/graphics/pipes");
var physicsComponent = require('../components/physics/physics');


var Pipe = function(position, size) {
    var physics = new physicsComponent.PhysicsComponent(this);
	physics.position = position;
    console.log(physics.position);
	physics.acceleration.x = -0.1;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
    this.components = {
    	physics: physics,
        graphics: graphics
    }
};

exports.Pipe = Pipe;