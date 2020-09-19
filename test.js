var myPar2 = $("#content p:last-child");

myPar2.fadeOut();
myPar2.fadeIn();
myPar2.css({position: "relative", color: "red"});
myPar2.animate({left: "50px"});