var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var k = 1; k < array.length + 1; k++) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        var newdiv = document.createElement("p");
        var textnode = document.createTextNode(value + "x" + k + "=" + value * k);
        newdiv.appendChild(textnode);
        document.body.appendChild(newdiv);
    }
}
