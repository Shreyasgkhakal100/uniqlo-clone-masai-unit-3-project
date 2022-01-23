

start()
let crslpic=["https://im.uniqlo.com/global-cms/spa/res2a96a18ade9fe3ecaeb3bbe5eda8ea40fr.jpg",
            "https://im.uniqlo.com/global-cms/spa/rescff3140a7639104150811d84415f6c71fr.jpg",
            "https://im.uniqlo.com/global-cms/spa/resff98eb755cb810e1104b099192022c4bfr.jpg",
            "https://im.uniqlo.com/global-cms/spa/res768d6eeb924df08ca1f79449981d2c37fr.jpg",
            "https://im.uniqlo.com/global-cms/spa/res60b8f6841d32a501f2ca76146614f9c2fr.jpg",
            "https://im.uniqlo.com/global-cms/spa/resc4124a6f541dfda2a6549aafa033308dfr.jpg",
            "https://im.uniqlo.com/global-cms/spa/resfe0483b529c64c28ecc08915a027894efr.jpg"
]

function start(){
    var i=1;
    let slide=document.getElementById("crsl");
    let image=document.createElement("img");
    setInterval(()=>{
        if(i==crslpic.length){
            i=0;
        }
        image.src=crslpic[i];
        slide.append(image)
        
        i++;
    },2000)
}

var app=document.querySelectorAll(".app");
app.forEach((elem)=>{
elem.addEventListener("click",()=>{
window.location.href="app.html"
})
})

var women=document.querySelectorAll(".women");
women.forEach(function(elem){
elem.addEventListener("click",()=>{
window.location.href="women.html"
})
})

var men=document.querySelectorAll(".men");
men.forEach(function(elem){
elem.addEventListener("click",()=>{
window.location.href="men.html"
})
})

var kids=document.querySelectorAll(".kids");
kids.forEach(function(elem){
elem.addEventListener("click",()=>{
window.location.href="kids.html"
})
})

var baby=document.querySelectorAll(".baby");
baby.forEach((elem)=>{
elem.addEventListener("click",()=>{
window.location.href="baby.html"
})
})
var fleece=document.querySelectorAll(".fleece");
fleece.forEach((elem)=>{
elem.addEventListener("click",()=>{
window.location.href="fleece.html"
})
})

var heattech=document.querySelectorAll(".heattech");
heattech.forEach((elem)=>{
elem.addEventListener("click",()=>{
window.location.href="heattech.html"
})
})

var ultra = document.querySelectorAll(".ultra-light-down");
ultra.forEach((elem)=>{
elem.addEventListener("click",()=>{
window.location.href="ultra-light-down.html"
})
})