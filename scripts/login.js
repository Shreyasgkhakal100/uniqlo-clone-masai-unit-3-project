function signin(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var userData = JSON.parse(localStorage.getItem("User")) || [];
    let userStatus = false;
    localStorage.setItem("userStatus", userStatus);
    let all_users = JSON.parse(localStorage.getItem("userDataBase"));
    let flag = true ;
    all_users.forEach(function (user) {
      if (email == user.email && password == user.create_password)

       {
           flag=false
        alert("Logged in Succesfully");
        userStatus = true;
        localStorage.setItem("userStatus", userStatus);
        window.location.href = "profile.html";       // enter location where you want to redirect after successful login
        localStorage.setItem("User",JSON.stringify(user));
        console.log("User:",user)
      }

    });
    if(flag){
      userStatus = false;
      localStorage.setItem("userStatus", userStatus);
        alert("Invalid Email Id or Password")
    }
  }

  function gotoLogin() {
      window.location.href = "registration.html"   
  } 