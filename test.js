var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Ron Swanson";

console.log(myCar.driver);

myCar.drive = function() {
  console.log("now driving");
};

myCar.drive();

var myCar2 = {
  maxSpeed: 80,
  driver: "April Ludgate",
  drive: function(speed, time){
  console.log(speed * time);
  }
};

console.log(myCar2.driver);
myCar2.drive(80, 2);