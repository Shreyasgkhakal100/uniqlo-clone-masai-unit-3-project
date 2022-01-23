import {navbar, women, men, kids, baby } from "../components/navbar_full.js";



// NavBar

var container = document.getElementById("navbarContainer");
container.innerHTML = navbar();

// Women

var wom_block = document.getElementById("women_box");
var hover_div = document.getElementById("navhover");



wom_block.addEventListener("mouseover", () => {
  hover_div.style.display="contents"

  hover_div.innerHTML = women();
});

var profile = document.querySelector(".profilecont");
var profile_hover = document.querySelector(".login-icon");

profile_hover.addEventListener("mouseover", () =>{
  profile.style.display = "contents"

  let userStatus=JSON.parse(localStorage.getItem("userStatus"))||false;
  if(userStatus==true){
    profile.innerHTML = ` <div class="profile">
    <div><a href="profile.html">Profile</a></div>
       <div class="tocoupon" ><a href="coupon.html">Coupons</a></div>
       <div><a href="#">Purchase history</a></div>
       <div><a href="#">Order history </a></div>
       <div><a href="#">Wish list </a></div>
       <div id="logincheck" ><a href="login.html">LogOut</a></div>
     </div>`;
    
  }else{
    
    profile.innerHTML=` <div class="profile">
  
      <div class="tocoupon" ><a href="coupon.html">Coupons</a></div>
      
      <div><a href="#"></a>Wish list</div>
      <div><a href="registration.html">Register</a></div>
      <div id="logincheck" ><a href="login.html">Login</a></div>
    </div>`
  


  
  }

})
document.querySelector(".login-icon").addEventListener("click",()=>{
  window.location.href="registration.html"
  })

  profile.addEventListener("mouseout", () =>{
    profile.style.display="none"

  })

profile.addEventListener("mouseover",()=>{
    profile.style.display = "contents"
})



// Men
var men_block = document.getElementById("men_box");

men_block.addEventListener("mouseover", () => {
  hover_div.style.display="contents"
   hover_div.innerHTML = men();

});


// // kids
var kids_block = document.getElementById("kids_box");
kids_block.addEventListener("mouseover", () => {
  hover_div.style.display="contents"
  hover_div.innerHTML = kids();

});


// // baby
var baby_block = document.getElementById("baby_box");
baby_block.addEventListener("mouseover", () => {
  hover_div.style.display="contents"
  hover_div.innerHTML = baby();

});


hover_div.addEventListener("mouseover",()=>{

hover_div.style.display="contents"
})



hover_div.addEventListener("mouseout",()=>{

hover_div.style.display="none"
})



document.querySelector("svg").addEventListener("click",()=>{
window.location.href="index.html"
})


    document.querySelector(".cart").addEventListener("click",()=>{
        window.location.href="cart.html"
        })
document.querySelector("#men_box").addEventListener("click",()=>{
window.location.href="mens.html"
})
document.querySelector("#women_box").addEventListener("click",()=>{
    window.location.href="women.html"
    })
document.querySelector("#kids_box").addEventListener("click",()=>{
        window.location.href="kids.html"
})
document.querySelector("#baby_box").addEventListener("click",()=>{
    window.location.href="baby.html"
    })

var small2 = document.getElementById("small2")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
if(cart.length>0){
small2.classList.toggle("none");
let count = document.createElement("p");
count.innerHTML = cart.length;
small2.append(count);
}

// let userStatus=JSON.parse(localStorage.getItem("userStatus"))||false;
// if(userStatus==true){
//   profile.classList.toggle("none")
// }else{
//   document.querySelector(".login-icon").addEventListener("click",()=>{
//     window.location.href="registration.html"
//     })
// }
// localStorage.getElementById("logincheck").innerHTML="Logout";

var tocoupon=document.querySelectorAll(".tocoupon");
tocoupon.forEach(function(elem){
elem.addEventListener("click",()=>{
window.location.href="coupon.html"
})
})