function myFunction() {
    var element = document.getElementsByTagName("a");
    for(i=0; i < element.length; i++){
        element[i].classList.add("mystyle");
    }
}
