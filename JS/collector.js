var closeReception = document.querySelector(".close");
var body = document.querySelector("body");
var sortDropDown = document.getElementsByClassName("sortDropDown");
var header = document.querySelector("header");
var inputs = document.querySelector("input");

// Open reception

function receptionHandler() {
  body.classList.toggle("active");
}

function sortHandler(val) {
  const arr = ["uName", "Age", "Region", "Gender", "Time"];

  arr.forEach(sortHandler(val));

  function sortHandler(val) {
    if (val == 'uName') {
      body.classList.add("sortActiveName");
      body.classList.remove("sortActiveAge")
      body.classList.remove("sortActiveRegion")
      body.classList.remove("sortActiveGender")
      body.classList.remove("sortActiveTime")
      
    } else if (val == 'Age') {
      body.classList.remove("sortActiveName");
      body.classList.add("sortActiveAge")
      body.classList.remove("sortActiveRegion")
      body.classList.remove("sortActiveGender")
      body.classList.remove("sortActiveTime")
    } else if (val == 'Region') {
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge")
      body.classList.add("sortActiveRegion")
      body.classList.remove("sortActiveGender")
      body.classList.remove("sortActiveTime")
    } else if (val == 'Gender') {
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge")
      body.classList.remove("sortActiveRegion")
      body.classList.add("sortActiveGender")
      body.classList.remove("sortActiveTime")
    } else{
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge")
      body.classList.remove("sortActiveRegion")
      body.classList.remove("sortActiveGender")
      body.classList.add("sortActiveTime")
    }
  }
}
