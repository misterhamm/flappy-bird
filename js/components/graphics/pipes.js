var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {

	console.log("pipe");

	var position = this.entity.components.physics.position;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.rect(0, 0, 0.2, 0.5);
	context.fill();
	context.closePath();
	context.restore();
	
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;