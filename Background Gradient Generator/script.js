var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var backg = document.getElementById("background");

function setgradrient(){
    backg.style.backgroundImage = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    +color2.value
    +")" ;
}



color1.addEventListener("input", setgradrient);
color2.addEventListener("input",setgradrient);
