//cart div appending


let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445292/item/ingoods_56_445292.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "S-3XL",
    description: "WOMEN Extra Stretch High Rise Denim Leggings Trousers",
    exclusive: "Exclusive Size Online Only\n New Arrivals",
    price: "1990",
    ProductID: 441197,
    quantity: 1,
  },
  {
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445388/item/ingoods_12_445388.jpg?width=1008&impolicy=quality_75",
    gendar: "WOMEN",
    size: "XS-XXL",
    description: "WOMEN Wirless Bra Active Square Neck",
    exclusive: "",
    price: "1990",
    ProductID: 439594,
    quantity: 2,
  },
];


let discount = JSON.parse(localStorage.getItem("discount"));


let rightDiv = document.querySelector(".rightDiv");
if(cart.length>0){
  showCart(cart);
}
function showCart(cart){
  // cartDiv.innerHTML = "";
  // let showCartDiv = document.createElement("div");
  // showCartDiv.setAttribute("class", "showCartDiv");

  let sum = 0;
    // let leftDiv = document.createElement("div");
    // leftDiv.setAttribute("class", "leftDiv");
    // let rightDiv = document.createElement("div");
    // rightDiv.setAttribute("class", "rightDiv");

    // showCartDiv.append(leftDiv, rightDiv);
    // cartDiv.append(showCartDiv);

    cart.map((elem, index) => {
      let { image, gendar, size, description, exclusive, price, quantity, ProductID } = elem;

      sum += price*quantity;
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
      amt = amt - amt*0.1;
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

  
    
    rightDiv.append(couponBtn);

}





// //popup toggle function
// function toggle() {
//   document.getElementById("popup").classList.toggle("none");
// }


function goToNextPage(){
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let pincode = document.getElementById("pincode").value;
  let add1 = document.getElementById("add1").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let mobile = document.getElementById("mobile").value;

  if(firstName.length > 0 && lastName.length > 0 && pincode.length > 0 && add1.length > 0 && city.length > 0 && state.length > 0 && mobile.length > 0){
    alert(firstName + ", We are adding this address to your current order, Please click on ok to complete payment.");
    window.location.href = "checkout-payment.html";
  }else{
    alert("You Are Missing Something!, Please Make Sure That No Field Remains Empty");
  }
  
}