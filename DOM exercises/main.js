var mainTitle = document.getElementsByTagName("h1");
console.log(mainTitle);
mainTitle[0].setAttribute("class", "titles");
mainTitle.innerHTML = "I changed this title via js!";

var text = document.getElementsByClassName("text");
console.log(text);
var uniqueParagraph = document.getElementById("unique-paragraph");
console.log(uniqueParagraph.textContent);
uniqueParagraph.textContent = "This is a new awesome text."
console.log(uniqueParagraph.getAttribute("id"));
uniqueParagraph.setAttribute("style", "color:red;");
uniqueParagraph.style.color="blue";

var list = document.getElementsByTagName("ul")[0];
var newLi =document.createElement("li");
var newA = document.createElement("a");
list.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML="Link 5";
newA.setAttribute("href", "#");
// parent.insertBefore("element I want to add", "element before which I want to add a new element");

var child = document.getElementsByTagName("li")[2];
var removed = list.removeChild(child);

uniqueParagraph.onclick = function(){
    alert("you clicked me! :)");
}