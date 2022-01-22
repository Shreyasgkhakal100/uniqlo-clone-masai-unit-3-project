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

  profile.innerHTML=` <div class="profile">
   <div><a href="#"></a>Profile</div>
      <div><a href="#"></a>Coupons</div>
      <div><a href="#"></a>Purchase history</div>
      <div><a href="#"></a>Order history</div>
      <div><a href="#"></a>Wish list</div>
      <div><a href="#"></a>Logout</div>
    </div>`


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

document.querySelector(".login-icon").addEventListener("click",()=>{
    window.location.href="signup.html"
    })
    document.querySelector(".cart").addEventListener("click",()=>{
        window.location.href="cart.html"
        })
document.querySelector("#men_box").addEventListener("click",()=>{
window.location.href="men.html"
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