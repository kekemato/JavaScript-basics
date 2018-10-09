var Car = function(driver, maxSpeed, color){
this.driver = driver;
this.maxSpeed = maxSpeed;
this.color = color;

this.drive = function(){
    console.log("I'm driving");
}
this.distanceTraveled = function(speed,time){
    console.log(speed * time);
}
}

var myCar = new Car("Magda", 150, "red");
myCar.drive();

var myCar2 = {
    driver: "Patryk",
    maxSpeed: 100,
    color: "black",

    drive: function(){
        console.log("I'm driving");
    },

    distanceTraveled: function(speed,time){
        console.log(speed * time);
    },

    driverLog: function() {
        console.log("Currently " + this.driver + " is driving.")
    }
};

console.log(myCar2.maxSpeed);
myCar2.driverLog();