var PipeGraphicsComponent = function(entity, size) {
    this.entity = entity;
    this.size = size;
    console.log(this.size);
};

PipeGraphicsComponent.prototype.draw = function(context) {

	var position = this.entity.components.physics.position;

	
	context.save();
	context.translate(position.x, position.y);

	// Bottom Pipe
	/*context.beginPath();
	context.rect(0, -0.1, 0.2, 0.5); // (left position, top position, width, height)
	context.fill();
	context.closePath();*/

	//Top Pipe
	context.beginPath();
	context.fillStyle = "green";
	context.rect(-this.size.x / 2, -this.size.y / 2, 0.2, 0.5 /*this.size.x, this.size.y*/); // (left position, top position, width, height)
	context.fill();
	context.closePath();
	
	context.restore();
	
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;