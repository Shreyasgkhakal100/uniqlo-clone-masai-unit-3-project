
var userData = JSON.parse(localStorage.getItem("User"));

let mem_email = document.getElementById("mem_email");
mem_email.innerText = userData.email;
let mem_pin = document.getElementById("mem_pin");
mem_pin.innerText = userData.pincode;
let mem_birthday = document.getElementById("mem_birthday");
mem_birthday.innerText = userData.birthday;
let mem_gender = document.getElementById("mem_gender");
mem_gender.innerText = userData.gender;