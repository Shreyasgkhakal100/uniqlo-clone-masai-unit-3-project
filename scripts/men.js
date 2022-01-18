let newMenObj=[
  {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445041/item/ingoods_30_445041.jpg?width=1008&impolicy=quality_75",
      gender : "MEN",
      size  : "S-3XL",
      name : "MEN Coach Jacket",
      desc : "Exclusive Size Online Only,New Arrivals",
      price : "Rs. 3,990.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446217/item/ingoods_00_446217.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-XXL",
    name : "MEN Monochrome Mickey Long Sleeve Sweatshirt",
    desc : "",
    price : "Rs. 1,990.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448383/item/ingoods_65_448383.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "MEN Hickory Oversized Stand Collar Long Sleeve Shirt",
    desc : "Exclusive Size Online Only",
    price : "Rs. 2,490.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444586/item/ingoods_67_444586.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "28INCH-40INCH",
    name : "MEN Regular Fit Straight Jeans",
    desc : "Exclusive Size Online Only,Limited Store",
    price : "Rs. 2,990.00"
  },
]
let product4 =document.getElementById("product4")
displayprod(newMenObj)
function displayprod(data){

  data.map(({image,gender,size,name,desc,price})=>{
     let div =document.createElement("div");
     let imgdiv = document.createElement("div");
     let sizediv =document.createElement("div");   
     let img =document.createElement("img");
     img.src =image;

     let gend = document.createElement("h3");
     gend.textContent =gender;
     let siz = document.createElement("h3");
     siz.textContent =size;

     let nam = document.createElement("h3");
     nam.textContent =name;

     let des = document.createElement("h3");
     des.textContent =desc;
     des.id ="desc"

     let pric = document.createElement("p");
     pric.textContent =price;

     imgdiv.append(img);
     sizediv.append(gend,siz);
     sizediv.id = "men"
    // sizediv.style.display ="flex"


     div.append(imgdiv,sizediv,nam,des,pric)
     product4.append(div)
  })
}

let newMenObj2= [
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444049/item/ingoods_03_444049.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Pile Lined Sweat Long Sleeve Full-Zip Hoodie",
    exc :  "Exclusive Size Online Only",
    striked_price : "Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited : "Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(19)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444051/item/ingoods_03_444051.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Pile Lined Sweat Pants",
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited : "Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(12)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/441097/item/ingoods_31_441097.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name : "MEN Pile Lined Fleece Set (Long Sleeve)", 
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited :"Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(29)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439589/item/ingoods_68_439589.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Ultra Light Down Jacket (3D Cut)",
    exc : "",
    striked_price : "",
    price : "Rs. 4,990.00",
    limited : "",
    star : "⭐⭐⭐⭐(64)",
  },
]
 let limited_off =document.getElementById("limited_offer");
 limitedOffers(newMenObj2)
function limitedOffers(data){

  data.map(({image,gender,size,name,exc,striked_price,price,limited,star})=>{
    let div =document.createElement("div");
    let imgdiv = document.createElement("div");
    let sizediv =document.createElement("div");   
    let img =document.createElement("img");
    img.src =image;

    let gend = document.createElement("h4");
    gend.textContent =gender;
    let siz = document.createElement("h4");
    siz.textContent =size;

    let nam = document.createElement("h3");
    nam.textContent =name;

    let des = document.createElement("p");
    des.textContent =exc;
    des.id ="desc"

    let striked = document.createElement("p");
    striked.textContent =striked_price;
    striked.id ="strikedprice"
    let pric = document.createElement("p");
    pric.textContent =price;
    pric.id ="redprice"

    let limit = document.createElement("p");
    limit.textContent =limited;
    limit.style.color ="red"
       
    let str = document.createElement("p");
    str.textContent =star;
    // str.style.border ="0"
    imgdiv.append(img);
    sizediv.append(gend,siz);
    sizediv.id = "men"
    div.append(imgdiv,sizediv,nam,des,striked,pric,limit,str);
    limited_off.append(div)
  })
}