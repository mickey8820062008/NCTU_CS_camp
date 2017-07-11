document.write("<h2>Condition</h2>");

var x = 5;
var y = 5;
var z;

if(x > y){
	z = x;
}
else if(x < y){
	z = y;
}
else{
	z = 0;
}

document.write("x = ", x, "<br/>");
document.write("y = ", y, "<br/>");
document.write("if(x > y): ", x > y, "<br/>");
document.write("else if(x < y): ", x < y, "<br/>");
document.write("else: ", x == y, "<br/>");
document.write("<br/>", "z = ", z, "<br/>", "<br/>");
