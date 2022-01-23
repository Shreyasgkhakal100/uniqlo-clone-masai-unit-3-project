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


let cart = JSON.parse(localStorage.getItem("cart")) || [];


let discount = JSON.parse(localStorage.getItem("coupon"));

let cartDiv = document.querySelector("#cartDiv");
if(cart.length>0){
  showCart(cart);
}



function showCart(cart){
  cartDiv.innerHTML = "";
  let showCartDiv = document.createElement("div");
  showCartDiv.setAttribute("class", "showCartDiv");

  let sum = 0;
    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("class", "leftDiv");
    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "rightDiv");

    showCartDiv.append(leftDiv, rightDiv);
    cartDiv.append(showCartDiv);

    cart.map((elem, index) => {
      let { image, gendar, size, description, exclusive, price, quantity, id } = elem;

      sum += price*quantity;

      let card = document.createElement("div");
      card.setAttribute("class", "card");

      let imgDivCart = document.createElement("div");
      imgDivCart.setAttribute("class", "imgDivCart");
      let imgCart = document.createElement("img");
      imgCart.src = image;
      imgDivCart.append(imgCart);

      let infoDivCart = document.createElement("div");
      infoDivCart.setAttribute("class", "infoDivCart");

      let titleAndCancel = document.createElement("div");
      let title = document.createElement("h3");
      title.innerHTML = description;
      let cancel = document.createElement("h3");
      cancel.setAttribute("class", "cancel");
      cancel.innerHTML =
        "<span style='font-size:40px; text-decoration: none'>&times;</span>";
      cancel.addEventListener("click", () => {
        removeFromCart(index);
      })
      titleAndCancel.append(title, cancel);

      price = +price
      let content = document.createElement("p");
      content.innerHTML = `Product Id: ${id} <br> Gender: ${gendar} <br> Size: ${size} <br> ${exclusive}<br> <b>Rs. ${price.toFixed(
        2
      )}</b> <br> <h3>Quantity: </h3>`;

      let tot = price*quantity;
      let quantAndSubtotal = document.createElement("div");
      let quant = document.createElement("select");
      quant.addEventListener("change", () => {
        console.log(quant.value);
        elem.quantity = quant.value;
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart(cart);
      })
      let option1 = document.createElement("option");
      option1.value = "1";
      option1.innerHTML = "1";

      let option2 = document.createElement("option");
      option2.value = "2";
      option2.innerHTML = "2";

      quant.append(option1, option2);

      quant.value = quantity;
      let subTotal = document.createElement("h3");
      subTotal.innerHTML = `SUBTOTAL: Rs. ${tot.toFixed(2)}`
      quantAndSubtotal.append(quant, subTotal);

      infoDivCart.append(titleAndCancel, content, quantAndSubtotal);

      
      card.append(imgDivCart, infoDivCart);
      leftDiv.append(card);
      if (cart.length > 1 && index < cart.length-1) {
        let hr = document.createElement("hr");
        leftDiv.append(hr);
      }
    });
    

    let orderSummary = document.createElement("div");
    rightDiv.append(orderSummary);

    let orderSummaryTitle = document.createElement("h3");
    orderSummaryTitle.innerHTML = `ORDER SUMMARY | ${cart.length} ITEM(S)`;

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    let row1 = document.createElement("tr");
    let col11 = document.createElement("td");
    col11.innerHTML = "Item(s) subtotal";
    let col12 = document.createElement("td");
    col12.innerHTML = `Rs. ${sum.toFixed(2)}`;
    col12.setAttribute("class", "col");
    row1.append(col11, col12);
    tbody.append(row1);

    let row2 = document.createElement("tr");
    let col21 = document.createElement("td");
    col21.innerHTML = "Shipping";
    let col22 = document.createElement("td");
    col22.innerHTML = `Rs. 100.00`;
    col22.setAttribute("class", "col");
    row2.append(col21, col22);
    tbody.append(row2);

    let row3 = document.createElement("tr");
    let col31 = document.createElement("td");
    col31.innerHTML = "<h3>SUBTOTAL</h3>";
    let col32 = document.createElement("td");
    col32.innerHTML = `<h3>Rs. ${(sum + 100).toFixed(2)}</h3>`;
    col32.setAttribute("class", "col");
    row3.append(col31, col32);
    tbody.append(row3);

    let row4 = document.createElement("tr");
    let col41 = document.createElement("td");
    col41.innerHTML = "<h3>DISCOUNT</h3>";
    let col42 = document.createElement("td");
    if (discount == 1) {
      col42.innerHTML = `<h3>10%</h3>`;
    } else {
      col42.innerHTML = `<h3>0%</h3>`;
    }
    col42.setAttribute("class", "col");
    row4.append(col41, col42);
    tbody.append(row4);

    let amt = (sum + 100).toFixed(2);
    let row5 = document.createElement("tr");
    let col51 = document.createElement("td");
    col51.innerHTML = "<h3>ORDER TOTAL</h3>";
    let col52 = document.createElement("td");
    if (discount == 1) {
      amt = amt - amt * 0.1;
      col52.innerHTML = `<h3>Rs. ${amt}</h3>`;
    } else {
      col52.innerHTML = `<h3>Rs. ${amt}</h3>`;
    }
    col52.setAttribute("class", "col");
    row5.append(col51, col52);
    tbody.append(row5);

    table.append(tbody);
    orderSummary.append(orderSummaryTitle, table);

    let couponBtn = document.createElement("div");
    couponBtn.innerHTML = `<div><i class="fas fa-gift"></i>    Coupon</div> <div><i class="fas fa-chevron-right"></i></div>`;
    couponBtn.addEventListener("click", () => {
      window.location.href = "coupon.html"
    });
    couponBtn.setAttribute("class", "couponBtn")

    let para = document.createElement("p");
    para.innerHTML =
      "Your items will be reserved for the next 30 minutes after the “Checkout” button has been pressed.";

    let checkoutBtn = document.createElement("div");
    checkoutBtn.innerHTML = "CHECKOUT";
    checkoutBtn.setAttribute("class", "checkoutBtn");
    checkoutBtn.addEventListener("click", () =>{
      window.location.href = "checkout-delivery.html";
    })


    let shoppingBtn = document.createElement("div");
    shoppingBtn.innerHTML = "CONTINUE SHOPPING";
    shoppingBtn.setAttribute("class", "shoppingBtn");
    shoppingBtn.addEventListener("click", () =>{
      window.location.href = "index.html";
    })
    
    rightDiv.append(couponBtn, para, checkoutBtn, shoppingBtn);

}




function removeFromCart(index) {
  console.log("in-")
  document.querySelector("#popup").classList.toggle("none");


  document.querySelector("#removeBtn").addEventListener("click", ()=>{
    cart.splice(index, 1);
    document.querySelector("#popup").classList.toggle("none");
    localStorage.setItem("cart", JSON.stringify(cart));
    if(cart.length>0){
      showCart(cart);
    }else{
      location.reload();
    }
    
    
  })
}




//popup toggle function
function toggle() {
  document.getElementById("popup").classList.toggle("none");
}

function goToNextPage() {
  window.location.href = "index.html";
}