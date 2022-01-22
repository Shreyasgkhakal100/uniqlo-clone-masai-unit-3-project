let getData =JSON.parse(localStorage.getItem("uniqProd")) || [];

showData(getData)
function showData(data){
    let div = document.createElement("div");
    let img =document.createElement("img");
    let img2 =document.createElement("img");
    let nam =document.createElement("h1")
    let des = document.createElement("h2");
    let pric =document.createElement("h4");
    let inclu =document.createElement("h5");
    let per = document.createElement("p");
    let hr =document.createElement("hr");

    document.getElementById("select").addEventListener("change", ()=>{
        getData.quantity = document.getElementById("select").value;
        // console.log(getData);
        showData(getData);
    });
    document.getElementById("btnDiv").innerHTML="";
    let addBtn = document.createElement("button");
    addBtn.setAttribute("id","addtoCart");
    addBtn.innerText="ADD TO CART";

   addBtn.addEventListener("click", ()=>{
        console.log("inside cart");
        addToCart(getData);
    });
    document.getElementById("btnDiv").append(addBtn);

    document.querySelector("#addBtn").addEventListener("click", () => {

        window.location.href = "./cart.html";
    })

    div.innerHTML = "";
    document.querySelector("#largeimg").innerHTML = "";
  //  document.getElementById("productId").innerHTML = "";
  document.getElementById("smallimg").innerHTML ="";
    document.querySelector("#content").innerHTML = "";


    inclu.innerText = `inclusive of all taxes`;
    per.innerText = `Supple texture that can be styled elegantly. A convenient blouse that can be worn for both casual and formal occasions.`;
    img.src =data.image;
    img2.src =data.image;
    nam.innerText =data.name;
    des.innerText =data.desc;
    pric.innerText = `MRP Rs.  ${data.price}.00`;
    div.append(nam,pric,des,inclu,per,hr);
    document.getElementById("smallimg").append(img2);
    document.getElementById("largeimg").append(img);
    document.getElementById("content").append(div);

}
let arr =JSON.parse(localStorage.getItem("cart"))|| [];
function addToCart(data) {
    arr.push(data);
    localStorage.setItem("cart", JSON.stringify(arr));
    toggle()
    
}

// addToCart(getData);


function toggle() {
    document.getElementById("popup").classList.toggle("none");

}
