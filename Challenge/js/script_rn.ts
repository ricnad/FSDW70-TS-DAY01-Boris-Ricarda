let droplist: Array<string> = ['Calzone', 'Diavola', 'La Toscana','Margerita','Quattro Formaggio', 'Salame'];

droplist.forEach(function(value) {
   console.log(value);
   $select.append("<option>"+value+"</option>");
});