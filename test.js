var newDiv = document.createElement("div");

var newA = document.createElement("a");

var links = document.getElementById("header");

links.appendChild(newDiv);
newDiv.appendChild(newA);

newA.innerHTML = "blog";

links.insertBefore(newDiv, links.getElementsByTagName("a")[0]);