window.onload = function(){
    var myForm = document.forms.myForm;

myForm.name.onfocus = function(){
    myForm.name.style.border = "1px solid red;";
}

myForm.name.onblur = function(){
    myForm.name.style.border = "none;";
}
}