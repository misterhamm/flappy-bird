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