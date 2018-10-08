var youLikeBoardGames = true;
var number = 10;
var x = "5";
var age = 20;
var iHaveADrivingLicense = true;
var i = 10;

if (youLikeBoardGames = true){
    document.write("You love board games!");
}
else {
    document.write("You don't like board games :(");
}

if (number > 9){
    document.write(" <br> Number is greater than 9");
}
else if (number < 9){
    document.write("<br> Number is smaller than 9");
}
else if (number == 9){
    document.write(" <br> Number is equal to 9");
}

if (x !== 5){
    document.write("<br> x isn't equal to 5 because it's a string not an integer.");
}
else if (x === 5){
    document.write("<br> x is equal to 5 and it's an integer.");
}

if (x >= 5){
    document.write("<br> x is greater than or equal to 5");
}
else if (x < 5){
    document.write("<br> x is smaller than 5");
}

if (age >= 18 && iHaveADrivingLicense == true){
    document.write("<br> <br> You can go on a vacation to Italy with us! <br>");
}
else if (age < 18 || iHaveADrivingLicense == false){
    document.write("<br> <br> You cannot go with us <br>");
}

while (i >= 0){
    document.write("<br>" + i + "<br>");
    i--
}
document.write("<br> <strong>Boom!</strong>");