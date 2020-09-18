var myForm = document.forms.myForm;

myForm.name.onfocus = function(){

  myForm.name.style.border = "2px solid black";

};

myForm.name.onblur = function(){

  myForm.name.style.border = "none";

};