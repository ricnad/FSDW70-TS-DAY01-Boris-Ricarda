


let array = [1,2,3,4,5,6,7,8,9,10];
for (let k = 1; k < array.length + 1 ; k++){ 

for (var value of array ) {
	var newdiv = document.createElement("p");
	var textnode = document.createTextNode(value + "x" + k  + "=" + value * k)
	newdiv.appendChild(textnode);
	document.body.appendChild(newdiv);
  
} }