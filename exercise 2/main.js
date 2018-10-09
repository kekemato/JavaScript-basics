var myCar = new Object();
myCar.driver = "Magda";
myCar.maxSpeed = 150;
myCar.color = "red";

myCar.drive = function(){
    console.log("I'm driving");
}
myCar.distanceTraveled = function(speed,time){
    console.log(speed * time);
}

myCar.distanceTraveled(100, 2.5);

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

myCar2.drive();
myCar2.driverLog();