let droplist: Array<string> = ['Calzone', 'Diavola', 'La Toscana','Margerita','Quattro Formaggio', 'Salame'];

droplist.forEach(function(value) {
   console.log(value);
   $("select").append("<option>"+ value+ "</option>");
});

function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("textcomment").value.length;

  // If x is Not a Number or less than one or greater than 10
  if (x == 0) {
         alert("Please fill out form");      
         return false;   
     } else {
    alert("Thank you for your message");
  }
  document.getElementById("demo").innerHTML = text;
}

