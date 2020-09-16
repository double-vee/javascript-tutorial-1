var Car = function(maxSpeed, driver){
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time){
    console.log(speed * time);
  };
  this.logDriver = function(){
    console.log("driver name is " + this.driver);
  };
}

var myCar = new Car(40, "Leslie Knope");
var myCar2 = new Car(50, "Ron Swanson");
var myCar3 = new Car(60, "Andy Dwyer");
var myCar4 = new Car(70, "April Ludgate");

myCar.drive(60, 0.5);
myCar3.logDriver();