var pipe = require('../entities/pipe');

var PipeRepeatSystem = function(entities) {
	this.entities = entities;
};


PipeRepeatSystem.prototype.run =  function() {
	// Run the update loop
	window.setInterval(this.tick.bind(this), 2000);
};

PipeRepeatSystem.prototype.tick = function() {
       
    var width = 0.2;//alter
    var height = 1;
    var size = {
        x: width,
        y: height
    };
    var position = {
        x: 1,//cannot see what this alters
        y: 5 // doesn't seem to change anything
    };
    
    this.entities.push(new pipe.Pipe(position, size)); //top
    
    var width = 1;// x position off canvas
    var height = Math.random() * -1; //flips y position of pipe when presented with a negative integer.
    var size = {
        x: width,
        y: height
    };
    var position = {
        x: 1.7, // x position off of canvas must stay hard coded.
        y: 0.5  // Do not increase positively, will raise bottom of pipe away from canvas edge.
    };
    
    this.entities.push(new pipe.Pipe(position, size));//bottom
};

exports.PipeRepeatSystem = PipeRepeatSystem;