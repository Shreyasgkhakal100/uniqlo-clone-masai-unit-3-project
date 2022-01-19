var getData = JSON.parse(localStorage.getItem("uniqloProd")) || [];

showProd(getData);
function showProd(data){

    let descDiv = document.createElement("div");
    let img = document.createElement("img");
    let desc = document.createElement("h2");
    let exclus = document.createElement("h3");
    let pric = document.createElement("h4");
    let inclus = document.createElement("h5");
    let pera = document.createElement("p");
    let hr = document.createElement("hr");
    
    inclus.innerText = `inclusive of all taxes`;
    pera.innerText = `Supple texture that can be styled elegantly. A convenient blouse that can be worn for both casual and formal occasions.`;
    img.src= data.image;
    desc.innerText = data.description;
    exclus.innerText = data.exclusive;
    pric.innerText = `MRP Rs.  ${data.price}`;
    descDiv.append(desc,pric,exclus,inclus,pera,hr);
    document.querySelector(".largeImage").append(img);
    document.querySelector(".content").append(descDiv);


}
