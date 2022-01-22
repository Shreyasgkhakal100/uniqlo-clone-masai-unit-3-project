import { navbar, women, men, kids, baby } from "../components/navbar_full.js";

// NavBar

var container = document.getElementById("navbarContainer");
container.innerHTML = navbar();

// Women

var wom_block = document.getElementById("women_box");
var hover_div = document.getElementById("hover");
let women_div = document.getElementById("women");
// hover.innerHTML = women();

wom_block.addEventListener("mouseover", () => {
  hover_div.style.display = "contents";

  hover_div.innerHTML = women();
});

var profile = document.querySelector(".profilecont");
var profile_hover = document.getElementById("downdiv41");

profile_hover.addEventListener("mouseover", () => {
  profile.style.display = "contents";

  profile.innerHTML = ` <div class="profile">

     <div><a href="#"></a>Profile</div>
        <div><a href="#"></a>Coupons</div>
        <div><a href="#"></a>Purchase history</div>
        <div><a href="#"></a>Order history</div>
        <div><a href="#"></a>Wish list</div>
        <div><a href="#"></a>Logout</div>
      </div>`;
});
//   document.querySelector(".profile").addEventListener("mouseover", () =>{
//     profile.style.display = "contents"

// })
// document.querySelector(".profile").addEventListener("mouseout", () =>{
//   profile.style.display="none"
//     profile.innerHTML="";

//     })
profile_hover.addEventListener("mouseout", () => {
  profile.style.display = "none";
  profile.innerHTML = "";
});

// Men
var men_block = document.getElementById("men_box");
// var men_div = document.getElementById("men");
men_block.addEventListener("mouseover", () => {
  hover_div.style.display = "contents";
  hover_div.innerHTML = men();
});

// // kids
var kids_block = document.getElementById("kids_box");
kids_block.addEventListener("mouseover", () => {
  hover_div.style.display = "contents";
  hover_div.innerHTML = kids();
});
// var kids_div = document.getElementById("kids");
// kids_div.innerHTML = kids();

// // baby
var baby_block = document.getElementById("baby_box");
baby_block.addEventListener("mouseover", () => {
  hover_div.style.display = "contents";
  hover_div.innerHTML = baby();
});

// var baby_div = document.getElementById("baby");
// baby_div.innerHTML = baby();
hover_div.addEventListener("mouseover", () => {
  hover_div.style.display = "contents";
});
hover_div.addEventListener("mouseout", () => {
  hover_div.style.display = "none";
});
document.querySelector("#downdiv1>img").addEventListener("click", () => {
  window.location.href = "index.html";
});

var small2 = document.getElementById("small2");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length > 0) {
  small2.classList.toggle("none");
  let count = document.createElement("p");
  count.innerHTML = cart.length;
  small2.append(count);
}
