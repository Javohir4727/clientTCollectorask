var closeReception = document.querySelector(".close");
var body = document.querySelector("body");
var sortDropDown = document.getElementsByClassName("sortDropDown");
var header = document.querySelector("header");
var res = document.getElementById("result");
var nameInp = document.getElementById("nameInp");
var ageInp = document.getElementById("ageInp");
var uGen = document.getElementById("uGen");
var region = document.getElementById("region");
var form = document.getElementById("form");

// Open reception

function receptionHandler() {
  body.classList.toggle("active");
}

// Open drop-downs
function sortHandler(val) {
  const arr = ["uName", "Age", "Region", "Gender", "Time"];

  arr.forEach(sortHandler(val));

  function sortHandler(val) {
    if (val == "uName") {
      body.classList.add("sortActiveName");
      body.classList.remove("sortActiveAge");
      body.classList.remove("sortActiveRegion");
      body.classList.remove("sortActiveGender");
      body.classList.remove("sortActiveTime");
    } else if (val == "Age") {
      body.classList.remove("sortActiveName");
      body.classList.add("sortActiveAge");
      body.classList.remove("sortActiveRegion");
      body.classList.remove("sortActiveGender");
      body.classList.remove("sortActiveTime");
    } else if (val == "Region") {
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge");
      body.classList.add("sortActiveRegion");
      body.classList.remove("sortActiveGender");
      body.classList.remove("sortActiveTime");
    } else if (val == "Gender") {
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge");
      body.classList.remove("sortActiveRegion");
      body.classList.add("sortActiveGender");
      body.classList.remove("sortActiveTime");
    } else {
      body.classList.remove("sortActiveName");
      body.classList.remove("sortActiveAge");
      body.classList.remove("sortActiveRegion");
      body.classList.remove("sortActiveGender");
      body.classList.add("sortActiveTime");
    }
  }
}
const users = JSON.parse(localStorage.getItem("users")) ?? [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = new User(uName.value, uAge.value, region.value, uGen.value);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  showUsers(users);
});
// Add user into  User Table

function User({ name, age, gender, region}) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.region = region;
  this.createdAt = new Date().getTime();
}

function showUsers(arr) {
  if (arr.length) {
    res.innerHTML = arr
      .map((item, i) => {
        const { uName, uAge, uGender, uRegion, createdAt } = item;
        return `<tr>
        <td>${i + 1}</td>
        <td>${uName}</td>
        <td>${uAge}</td>
        <td>${uGender}</td>
        <td>${uRegion}</td>
        <td>${createdAt}</td>
      </tr>`;
      })
      .join(" ");
  } else {
    res.innerHTML = `<tr><td colspan = '6' style='text-align: center'>User does not exist</td></tr>`;
  }
}
showUsers(users);
