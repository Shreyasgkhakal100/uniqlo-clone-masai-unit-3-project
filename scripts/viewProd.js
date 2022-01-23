var getData = JSON.parse(localStorage.getItem("uniqloProd"));

var selected;  


showProd(getData);
function showProd(getData) {
   
    console.log(getData);
    let descDiv = document.createElement("div");
    let img = document.createElement("img");
    let smallImg = document.createElement("img");
    let desc = document.createElement("h2");
    let exclus = document.createElement("h3");
    let pric = document.createElement("h4");
    let inclus = document.createElement("h5");
    let pera = document.createElement("p");
    let hr = document.createElement("hr");

    var itemPriceTotal =   document.getElementById("itemPrice");
    itemPriceTotal.innerText = `Rs. ${getData.price}.00`;
    document.getElementById("select").addEventListener("change", ()=>{
        let selected = document.getElementById("select").value;
        getData.quantity = selected;
        showProd(getData);
        itemPriceTotal.innerText= `Rs. ${getData.price * selected}.00`;
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

    descDiv.innerHTML = "";
    document.querySelector(".largeImage").innerHTML = "";
    document.getElementById("productId").innerHTML = "";
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".smallImages").innerHTML="";

    

    inclus.innerText = `inclusive of all taxes`;
    pera.innerText = `Supple texture that can be styled elegantly. A convenient blouse that can be worn for both casual and formal occasions.`;
    img.src = getData.image;
    smallImg.src = getData.image;
    desc.innerText = getData.description;
    exclus.innerText = getData.exclusive;
    pric.innerText = `MRP Rs.  ${getData.price}`;
    descDiv.append(desc, pric, exclus, inclus, pera, hr);
    document.getElementById("productId").innerText = getData.id;
    document.querySelector(".smallImages").append(smallImg);
    document.querySelector(".largeImage").append(img);
    document.querySelector(".content").append(descDiv);


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



