/// <reference path="../../../lib/typings/meteor/meteor.d.ts"/>
/// <reference path="../../../lib/typings/jquery/jquery.d.ts"/>

var nodeArray;
var idVar = 0;
var middlePoint =[]

Template.node.helpers({
    'top': function () {
        return middlePoint[0];
    },
    'left': function() {
        return middlePoint[1];
    }
});

Template.nodeForm.events({
	'submit form': function (e) {
		e.preventDefault();
        
		var numberOfNodes = parseInt(e.target.numberLines.value);
		e.target.numberLines.value= '';

        var hasFather = e.target.hasFather.checked;
        $("[name=hasFather]").removeAttr('checked');
        
        if (hasFather == true) {
            numberOfNodes = numberOfNodes + 1;
        }
        
        numberOfNodes = numberOfNodes + 2;
        
        var heigthNav = $(".header").first().height();
        var canvas = document.getElementById('node-canvas');
        
        canvas.width = $(window).width(); 
        canvas.height = $(window).height() - heigthNav;
       
        nodeArray =[];
       
        var context = canvas.getContext('2d');
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        
        middlePoint[0] = centerX;
        middlePoint[1] = centerY;
        
        var r = 250;
        var deg = 360 / numberOfNodes;
        
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
            
            if (hasFather == true && (numberOfNodes-1) == i) {
                context.strokeStyle = "#FF4221";                
                context.lineWidth = 10;
                context.setLineDash([]);
            }
            
            context.beginPath();
            context.moveTo(centerX, centerY);
            var posX = centerX - (r * Math.cos(degToRad(deg * i)));
            var posY = centerY - (r * Math.sin(degToRad(deg * i)));
            
            $( "#centerPoint" ).offset({ top: centerY, left: centerY});
            
            var colorLine = context.strokeStyle;
            
            nodeArray[i] = [i, posX, posY, colorLine];
                        
            
            context.lineTo(posX, posY);
            context.stroke();
        }
        
        function degToRad(degree) {
            var radians = (degree + 225)* (Math.PI/180);
            return radians;
        }	
	}
});
