document.write("<h2>While Loop</h2>");

var i = 0;
var x = 0;

document.write("x = ");
while(i < 10){
	x += i;
	document.write(x, " ");
	i++;
}
document.write("<br/>");

document.write("random generated x & y", "<br/>");
var count = 0
while(1){
	count++;
	x = Math.floor(Math.random() * 10);
	y = Math.floor(Math.random() * 10);
	document.write(count, " : x = ", x, ", y = ", y, "<br/>");
	if(x == y){
		document.write("x and y are equal after ", count, " tries.", "<br/>");
		break;
	}
}