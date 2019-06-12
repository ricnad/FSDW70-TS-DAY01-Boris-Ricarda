var droplist = ['Calzone', 'Diavola', 'La Toscana', 'Margerita', 'Quattro Formaggio', 'Salame'];
droplist.forEach(function (value) {
    console.log(value);
    document.write("<option>" + value + "</option>");
});
