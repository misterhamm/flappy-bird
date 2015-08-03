var graphicsComponent = require("../components/graphics/pipes");
var physicsComponent = require('../components/physics/physics');


var PipeBottom = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x     = 1;
	physics.acceleration.x = -0.1;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    this.components = {
    	physics: physics,
        graphics: graphics
    }
};

exports.Pipe = PipeBottom;