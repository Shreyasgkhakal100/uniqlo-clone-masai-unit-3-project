const recentlyViewObj = [
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445293/item/ingoods_64_445293.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "S-3XL",
    description: "WOMEN Extra Stretch High Rise Denim Leggings Trousers",
    exclusive: "",
    price: "1,990.00",
  },
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/433604/item/ingoods_30_433604.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "XS-XXL",
    description: "WOMEN Rayon Long Sleeve Blouse",
    exclusive: "Exclusive Size Online Only",
    price: "1,990.00",
  },

  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445292/item/ingoods_56_445292.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "S-3XL",
    description: "WOMEN Extra Stretch High Rise Denim Leggings Trousers",
    exclusive: "Exclusive Size Online Only\n New Arrivals",
    price: "1,990.00",
  },
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445388/item/ingoods_12_445388.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "XS-XXL",
    description: "WOMEN Wirless Bra Active Square Neck",
    exclusive: "",
    price: "1,990.00",
  },
];



recentlyView(recentlyViewObj);
function recentlyView(data) {
  data.map(({ image, gendar, size, description, exclusive, price }) => {
    let mainDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    let sizeDiv = document.createElement("div");
    sizeDiv.setAttribute("class", "sizeDiv");

    let img = document.createElement("img");
    let gend = document.createElement("h3");
    let siz = document.createElement("h3");
    let desc = document.createElement("h2");
    let exclus = document.createElement("h4");
    let pric = document.createElement("h4");

    exclus.setAttribute("class", "exclusive");

    img.src = image;
    gend.innerText = gendar;
    siz.innerText = size;
    desc.innerText = description;
    exclus.innerText = exclusive;
    pric.innerText = `Rs. ${price}`;

    imgDiv.append(img);
    sizeDiv.append(gend, siz);
    mainDiv.append(imgDiv, sizeDiv, desc, exclus, pric);

    document.querySelector(".slideProducts").append(mainDiv);
  });
}


//cart div appending


let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445292/item/ingoods_56_445292.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "S-3XL",
    description: "WOMEN Extra Stretch High Rise Denim Leggings Trousers",
    exclusive: "Exclusive Size Online Only\n New Arrivals",
    price: "1,990.00",
  },
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445388/item/ingoods_12_445388.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "XS-XXL",
    description: "WOMEN Wirless Bra Active Square Neck",
    exclusive: "",
    price: "1,990.00",
  },
];

let cartDiv = document.querySelector("#cartDiv");
if(cart.length>0){
  showCart(cart);
}
function showCart(cart){
  cartDiv.innerHTML = "";
  let showCartDiv = document.createElement("div");
  showCartDiv.setAttribute("class", "showCartDiv");

    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("class", "leftDiv");
    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "rightDiv");

    showCartDiv.append(leftDiv, rightDiv);
    cartDiv.append(showCartDiv);

    cart.map(({ image, gendar, size, description, exclusive, price }) => {
      let imgDivCart = document.createElement("div");
      imgDivCart.setAttribute("class", "imgDivCart");
      let imgCart = document.createElement("img");
      imgCart.src = image;

      let infoDivCart = document.createElement("div");
      infoDivCart.setAttribute("class", "infoDivCart");

      let titleAndCancel = document.createElement("div");
      let title = document.createElement("h2");
      title.innerHTML = description;

      let cancel = document.createElement("h2");
      cancel.innerHTML = "&times;";
    });
    

}