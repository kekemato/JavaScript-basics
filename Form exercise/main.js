window.onload = function(){
    var myForm = document.forms.myForm;
    var message = document.getElementById("message");

myForm.name.onfocus = function(){
    myForm.name.style.border = "1px solid red";
}

myForm.name.onblur = function(){
    myForm.name.style.border = "none";
}

myForm.onsubmit = function (){
    if (myForm.name.value == ""){
        message.innerHTML="Please enter a name.";
        return false;
    }
    else{
    message.innerHTML="";
    return true;
    }
}

}