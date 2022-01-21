var getData = JSON.parse(localStorage.getItem("uniqloProd")) || [];

showProd(getData);
function showProd(data) {

    let descDiv = document.createElement("div");
    let img = document.createElement("img");
    let desc = document.createElement("h2");
    let exclus = document.createElement("h3");
    let pric = document.createElement("h4");
    let inclus = document.createElement("h5");
    let pera = document.createElement("p");
    let hr = document.createElement("hr");

    var cartObj = {
        image: data.image,
        description: data.description,
        exclusive: data.exclusive,
        price: data.price,
        id: data.id,

    }
    document.querySelector("#addBtn").addEventListener("click", () => {

        addDataFunc(cartObj);
    })

    inclus.innerText = `inclusive of all taxes`;
    pera.innerText = `Supple texture that can be styled elegantly. A convenient blouse that can be worn for both casual and formal occasions.`;
    img.src = data.image;
    desc.innerText = data.description;
    exclus.innerText = data.exclusive;
    pric.innerText = `MRP Rs.  ${data.price}`;
    descDiv.append(desc, pric, exclus, inclus, pera, hr);
    document.getElementById("productId").innerText = data.id;
    document.querySelector(".largeImage").append(img);
    document.querySelector(".content").append(descDiv);


}

// js for popup....

function addDataFunc(data){
    localStorage.setItem("cart", JSON.stringify(data));
    window.location.href = "./cart.html";
}
function addToCart() {
    toggle()
}


function selectItem(){
    var selected = document.querySelector("#select").value;
    
    document.querySelector("#itemPrice").innerText =  `Rs. ${Number(getData.price) * Number(selected)}`;
    
}

function toggle() {
    document.getElementById("popup").classList.toggle("none");

}


