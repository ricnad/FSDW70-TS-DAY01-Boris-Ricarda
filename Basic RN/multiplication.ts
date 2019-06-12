let list: Array<number> = [1,2,3,4,5,6,7,8,9,10];
console.log(list);

function mult(){
	for(var i=0; i<list.length; i++){
		var b= list[i]*list[i];
			
		console.log(b);
		}
	}

function test(){
	for (var a of list) {
    console.log(a);
    for (i=0; i<list.length; i++){
    	var c=a*list[i];
    console.log(c);
    document.write(a+"x"+list[i]+"="+c+"<br>");
}
}
}

mult();
test();