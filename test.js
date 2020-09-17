var newDiv = document.createElement("div");

var newA = document.createElement("a");

var links = document.getElementById("header");

links.appendChild(newDiv);
newDiv.appendChild(newA);

newA.innerHTML = "blog";

links.insertBefore(newDiv, links.getElementsByTagName("a")[0]);

var parent = document.getElementById("header");

var child = parent.getElementsByTagName("div")[0];

var removed = parent.removeChild(child);

parent.appendChild(removed);