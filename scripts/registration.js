var userData = JSON.parse(localStorage.getItem("userDataBase")) || [];

function signUp(event) {
    event.preventDefault()

    var email = document.getElementById("email").value;
    var password = document.getElementById("create_password").value;
    var birthday = document.getElementById("birthday").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var others = document.getElementById("Others");
    var pincode = document.getElementById("pin").value;
    var checkbox = document.getElementById("checkbox").checked

    var obj = {
        email: email,
        create_password: password,
        birthday: birthday,
        checkbox: true,
        pincode: pincode,
        gender: male.checked ? "male" : female.checked ? "female" : others.checked ? "others" : null
    }
    console.log(obj)
    userData.push(obj);

    window.location.href = "login.html";
    localStorage.setItem("userDataBase", JSON.stringify(userData))
    alert("User registered sucessfully !!")
} 