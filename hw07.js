var c = document.getElementById("clear")
var box = document.getElementById("box")
var lastX = -1;
var lastY = -1;

var clear = function(e){
    
}

var draw = function(e){
    x = e.offsetX;
    y = e.offsetY;
    if (lastX != -1){
	var line = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	line.setAttribute("x1", x.toString() );
	line.setAttribute("y1", y.toString() );
	line.setAttribute("x2", lastX.toString() );
	line.setAttribute("y2", lastY.toString() );
	line.setAttribute("cx", x.toString() );
	line.setAttribute("fill", "red" );
	box.appendChild(line);
    }
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x.toString() );
    circle.setAttribute("cy", y.toString() );
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "red");
    box.appendChild(circle);
    lastX = x;
    lastY = y;
}

c.addEventListener("click", clear);
box.addEventListener("click", draw);
