var coupon=document.querySelector("#input")


document.getElementById("apply").addEventListener("click",applycoupon);
function applycoupon(){
    
    var p1=document.getElementById("success");
   if(coupon.value=="Republic10"){

p1.innerText=" Coupon Applied !"
p1.style.color="green"
p1.style.fontWeight="bolder"
localStorage.setItem("coupon",JSON.stringify(+1))
   }
   else{
       p1.innerText="The coupon code is invalid"
       p1.style.color="red"
       localStorage.setItem("coupon",JSON.stringify(0))
   }
}


document.querySelector("input").addEventListener("mouseover",()=>{
    var text=document.querySelector(".text");
    text.style.color="cadetblue";
})
document.querySelector("input").addEventListener("mouseout",()=>{
    var text=document.querySelector(".text");
    text.style.color="black";
})
document.getElementById("cancel").addEventListener("click",()=>{
    window.location.href="cart.html"
    localStorage.setItem("coupon",JSON.stringify(0))
})