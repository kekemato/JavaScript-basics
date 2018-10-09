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