/// <reference path="../../../lib/typings/meteor/meteor.d.ts"/>
/// <reference path="../../../lib/typings/jquery/jquery.d.ts"/>

Template.nodeForm.events({
	"submit form": function (e) {
		e.preventDefault();
        
		var numberOfNodes = parseInt(e.target.numberLines.value);
		e.target.numberLines.value= '';

        numberOfNodes = numberOfNodes + 2;

        drawLines (numberOfNodes);
	}
});

function drawBubble (topBubble, leftBubble) {
    var widthNode = ($(".node-dot").first().width())/2;
    var heigthForm = $(".form-aux").first().height();
    
    $( "#centerPoint" ).offset({ 
                top: topBubble + heigthForm,
                left: leftBubble - widthNode});
};

function drawLines (numberOfNodes) {
    var canvas = document.getElementById('node-canvas');
    var heigthNav = $(".header").first().height();
    
    canvas.width = $(window).width(); 
    canvas.height = $(window).height() - heigthNav;
   
    var context = canvas.getContext('2d');
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    var r = 250;
    var deg = 360 / numberOfNodes;
    
    drawBubble(centerY+heigthNav, centerX);
    
    for ( var i = 0 ; i < numberOfNodes ; i++ ) {
    	context.lineWidth = 5;            
        switch (i) {
            case 0:
                context.strokeStyle = "#00F94F";
                context.setLineDash([3,4]);
                break;
            case 1:
                context.strokeStyle = "#000000";
                break;
            default:
                context.strokeStyle = "#FF4221";
                context.setLineDash([]);
        }
        
        context.beginPath();
        context.moveTo(centerX, centerY);
        
        var posX = centerX - (r * Math.cos(degToRad(deg * i)));
        var posY = centerY - (r * Math.sin(degToRad(deg * i)));
        
        context.lineTo(posX, posY);
        context.stroke();
    }
}

function degToRad(degree) {
        var radians = (degree + 225)* (Math.PI/180);
        return radians;
}