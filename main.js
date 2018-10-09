var youLikeBoardGames = true;

if (youLikeBoardGames = true){
    document.write("You love board games!");
}
else {
    document.write("You don't like board games :(");
}

var number = 10;

if (number > 9){
    document.write(" <br> Number is greater than 9");
}
else if (number < 9){
    document.write("<br> Number is smaller than 9");
}
else if (number == 9){
    document.write(" <br> Number is equal to 9");
}

var x = "5";

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

var age = 20;
var iHaveADrivingLicense = true;

if (age >= 18 && iHaveADrivingLicense == true){
    document.write("<br> <br> You can go on a vacation to Italy with us! <br>");
}
else if (age < 18 || iHaveADrivingLicense == false){
    document.write("<br> <br> You cannot go with us <br>");
}

var i = 10;

while (i >= 0){
    document.write("<br>" + i + "<br>");
    i--
}
document.write("<br> <strong>Boom!</strong>");

for (let m = 1; m <= 10; m++){
    document.write("<br>");
        for (let p = 1; p <= 10; p++){
            document.write(p * m + " ");
        }
}

for (let b = 1; b < 10; b++){

    if (b === 3 || b === 5){
        continue;
    }

    document.write("<br>" + b + " ");

    if (b === 7){
        break;
    }
}

function average (a,b){
var average = (a + b) / 2; //local variable
return average;
}

var result = average(11, 5); //global variable
document.write("<br> The result is: " + result);

var num = 5;
var test = "4";

if (!NaN == num || !NaN == test){
    document.write("<br> meaning of life is" + num * test);
}
else (NaN == num || NaN == test)
    document.write("<br> You can only put numbers in!");

    var string = "I'm getting a new cat today";

    if (string.indexOf("cat")!== -1){
        console.log("Yay I love cats!");
    }
    else if (string.indexOf("dog")!== -1){
        console.log("Dogs are cool even though they smell.");
    }