function calc() {
  // getting the value from the input field and multiply it with the value of the planet.
  var x = document.querySelector("#value1").value;
  var sun = x * 27.01;
  var mercury = x * 0.38;
  var venus = x * 0.91;
  var earth = x * 1;
  var moon = x * 0.166;
  var mars = x * 0.38;
  var jupiter = x * 2.34;
  var saturn = x * 1.06;
  var uranus = x * 0.92;
  var neptune = x * 1.19;
  var pluto = x * 0.06;

  // sending the result to the innerHTML of the selected planet.
  document.getElementById("weight-sun").innerHTML = sun.toFixed(2) + " kg";
  document.getElementById("weight-mercury").innerHTML =
    mercury.toFixed(2) + " kg";
  document.getElementById("weight-venus").innerHTML = venus.toFixed(2) + " kg";
  document.getElementById("weight-earth").innerHTML = earth.toFixed(2) + " kg";
  document.getElementById("weight-moon").innerHTML = moon.toFixed(2) + " kg";
  document.getElementById("weight-mars").innerHTML = mars.toFixed(2) + " kg";
  document.getElementById("weight-jupiter").innerHTML =
    jupiter.toFixed(2) + " kg";
  document.getElementById("weight-saturn").innerHTML =
    saturn.toFixed(2) + " kg";
  document.getElementById("weight-uranus").innerHTML =
    uranus.toFixed(2) + " kg";
  document.getElementById("weight-neptune").innerHTML =
    neptune.toFixed(2) + " kg";
  document.getElementById("weight-pluto").innerHTML = pluto.toFixed(2) + " kg";
}

function resetCalc() {
  // Set all weight values to 0
  document.getElementById("weight-sun").innerHTML = "0";
  document.getElementById("weight-mercury").innerHTML = "0";
  document.getElementById("weight-venus").innerHTML = "0";
  document.getElementById("weight-earth").innerHTML = "0";
  document.getElementById("weight-moon").innerHTML = "0";
  document.getElementById("weight-mars").innerHTML = "0";
  document.getElementById("weight-jupiter").innerHTML = "0";
  document.getElementById("weight-saturn").innerHTML = "0";
  document.getElementById("weight-uranus").innerHTML = "0";
  document.getElementById("weight-neptune").innerHTML = "0";
  document.getElementById("weight-pluto").innerHTML = "0";

  // Clear the input field
  document.querySelector("#value1").value = "";
}
