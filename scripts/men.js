let newMenObj=[
  {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445041/item/ingoods_30_445041.jpg?width=1008&impolicy=quality_75",
      gender : "MEN",
      size  : "S-3XL",
      name : "MEN Coach Jacket",
      desc : "Exclusive Size Online Only,New Arrivals",
      price : 3990
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446217/item/ingoods_00_446217.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-XXL",
    name : "MEN Monochrome Mickey Long Sleeve Sweatshirt",
    desc : "",
    price : 1990
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448383/item/ingoods_65_448383.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "MEN Hickory Oversized Stand Collar Long Sleeve Shirt",
    desc : "Exclusive Size Online Only",
    price : 2490
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444586/item/ingoods_67_444586.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "28INCH-40INCH",
    name : "MEN Regular Fit Straight Jeans",
    desc : "Exclusive Size Online Only,Limited Store",
    price : 2990
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
     pric.textContent = `Rs. ${price}`;

     let productObj ={
      image,
      gender,
      size,
      name,
      desc,
      price,
  };

  div.addEventListener("click",()=>{
      storingData(productObj)
  })

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
    price : 1990,
    desc : "",
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
    price : 1990,
    desc : "",
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
    price : 1990,
    desc : "",
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
    price :1990,
    desc : "",
    limited : "",
    star : "⭐⭐⭐⭐(64)",
  },
]
 let limited_off =document.getElementById("limited_offer");
 limitedOffers(newMenObj2)
function limitedOffers(data){

  data.map(({image,gender,size,name,exc,striked_price,price,desc,limited,star})=>{
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
    pric.textContent =`Rs. ${price}`;
    pric.id ="redprice"

    let limit = document.createElement("p");
    limit.textContent =limited;
    limit.style.color ="red"
       
    let str = document.createElement("p");
    str.textContent =star;

    let productObj ={
      image,
      gender,
      size,
      name,
      desc,
      price,
  };

  div.addEventListener("click",()=>{
      storingData(productObj)
  })
    // str.style.border ="0"
    imgdiv.append(img);
    sizediv.append(gend,siz);
    sizediv.id = "men"
    div.append(imgdiv,sizediv,nam,des,striked,pric,limit,str);
    limited_off.append(div)
  })
}


let newMenObj3= [
  {
    image : "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446519/item/goods_69_446519.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "XS-XXL",
    name :  "MEN Easy Work Trousers",
    exc :  "Exclusive Size Online Only",
    striked_price : "Rs. 4,990.00",
    price : 3990,
    desc : "",
    limited : "Sale",
    star : "⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448661/item/ingoods_01_448661.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Smart Ankle Trousers 2WAY Stretch Cotton",
    exc : "Exclusive Size Online Only,New Arrivals",
    striked_price :"Rs. 2,490.00",
    price : 1990,
    desc : "",
    limited : "Sale",
    star : "⭐⭐⭐⭐⭐(2)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438793/item/ingoods_69_438793.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name : "MEN Souffle Yarn Mock Neck Long Sleeve Sweater", 
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price :  1990,
    desc : "",
    limited :"Sale",
    star : "⭐⭐⭐⭐(2)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446430/item/goods_08_446430.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-L",
    name :  "MEN Supima Cotton Oversized Stand Collar Shirt",
    exc : "Online Only",
    striked_price : "Rs. 2,990.00",
    price :  1990,
    desc : "",
    limited : "Sale",
    star : "",
  },
]
 let sale =document.getElementById("sale_product")
 SaleOffers(newMenObj3)
function  SaleOffers(data){

  data.map(({image,gender,size,name,exc,striked_price,price,desc,limited,star})=>{
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
    pric.textContent =`Rs. ${price}`;
    pric.id ="redprice"

    let limit = document.createElement("p");
    limit.textContent =limited;
    limit.style.color ="red"
       
    let str = document.createElement("p");
    str.textContent =star;
    let productObj ={
      image,
      gender,
      size,
      name,
      desc,
      price,
  };

  div.addEventListener("click",()=>{
      storingData(productObj)
  })
    // str.style.border ="0"
    imgdiv.append(img);
    sizediv.append(gend,siz);
    sizediv.id = "men"
    div.append(imgdiv,sizediv,nam,des,striked,pric,limit,str);
    sale.append(div)
  })
}


let newMenObj4=[
  {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444553/item/ingoods_67_444553.jpg?width=1008&impolicy=quality_75",
      gender : "MEN",
      size  : "S-XXL",
      name : "MEN Utility Parka",
      desc : "Limited Store",
      price : 4990,
      star : "⭐⭐⭐⭐⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/440522/item/ingoods_66_440522.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "Waffle Crew Neck Long Sleeve T-Shirt",
    desc : "Exclusive Size Online Only",
    price : 1990,
    star : "⭐⭐⭐⭐⭐(3)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444583/item/ingoods_05_444583.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "28INCH-38INCH",
    name : "MEN Extra Stretch Skinny Fit Jeans",
    desc : "Exclusive Size Online Only",
    price : 2990,
    star : "⭐⭐⭐⭐⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448134/item/ingoods_04_448134.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "MEN Ultra Stretch Dry Sweat Trousers",
    desc : "Exclusive Size Online Only,New Arrivals",
    price : 2490,
    star : "⭐⭐⭐⭐⭐(5)",
  },
]

let feature =document.getElementById("featured_offer")
featureprod(newMenObj4)
function featureprod(data){

  data.map(({image,gender,size,name,desc,price,star})=>{
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

     let des = document.createElement("h3");
     des.textContent =desc;
     des.id ="desc"

     let pric = document.createElement("h4");
     pric.textContent =`Rs. ${price}`;

     let str = document.createElement("h4");
     str.textContent =star;
     let productObj ={
      image,
      gender,
      size,
      name,
      desc,
      price,
  };

  div.addEventListener("click",()=>{
      storingData(productObj)
  })
     imgdiv.append(img);
     sizediv.append(gend,siz);
     sizediv.id = "men"
    // sizediv.style.display ="flex"


     div.append(imgdiv,sizediv,nam,des,pric,str)
     feature.append(div)
  })
}
let pickupimg =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/res8d80b49276715e269314f640dc787af7fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb017b915e0496d3f006995675f290d86fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/rese86928c1ccc41b21e28feeb046b35bd1fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res9c1cfa476bbfd0e0886a79738894c8a3fr.jpg"
  },
  {
    image :"https://im.uniqlo.com/global-cms/spa/res3d3695458dbf64a866666af18a51d948fr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res56abd7a444e2e4077a5d0193e0a07e52fr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res8caeee0cec0c5885a8fa1edb836fa95cfr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb396bd6cdd7368d6a2d8dbabb350266efr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb62383efa267630e25929bcbcf086bf2fr.jpg"
  }
]
let pickup =document.getElementById("pickup");
pickupCAtegory(pickupimg)
function pickupCAtegory(data){
   data.map(({image})=>{
     let div =document.createElement("div")
     let img = document.createElement("img");
     img.src =image
     div.append(img)
     pickup.append(div)
   })
} 

let featuredobj =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  },
  // {
  //   image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  // },
  // {
  //   image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  // },
]
 let featurenews =document.getElementById("featured_news");
 featurednews(featuredobj)
function featurednews(data){
   data.map(({image})=>{
     let img =document.createElement("img");
     img.src =image;
     featurenews.append(img)
   })
}

let morefeaturedobj =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/resca7228f636e1f9e9983d8be65e5b5145fr.jpg",
    head : "ULTRA LIGHT COLLECTION",
    desc : "A new essential for your new way of life."
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res2e98846b0ba4832ff9a67ecad4542c79fr.jpg",
    head : "FLEECE COLLECTION",
    desc : "Express your personality and stay cozy all season long - just reach for your  favorite fleece."
             
        
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resc8b66447eb9ae8c8f74035c5f62762b8fr.jpg",
    head : "HEATTECH COLLECTION",
    desc :  "Wear less, More Warmth. Innovative  fabric generates heat from your body moisture",
  
    
  }
]
let collection =document.getElementById("collection")

feat(morefeaturedobj)
function feat(data){

  data.map(({image,head,desc})=>{
    let div =document.createElement("div");
    let imgdiv =document.createElement("div")

    let img =document.createElement("img")
    img.src =image

    let h4 =document.createElement("h4");
    h4.textContent =head;
    h4.style.paddingLeft ="36px"

    let p =document.createElement("p");
    p.textContent =desc;
    p.style.paddingLeft ="36px"
    p.style.paddingRight ="36px"
    p.style.lineHeight ="18px"
    imgdiv.append(img)
    div.append(imgdiv,h4,p);
    collection.append(div)
  })
}

let morefeaturedobj2 =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb64ae67a2d1dfa5ad28199023e1a9815fr.jpg",
    head : "UNIQLO U | LAUNCHING 18TH FEBRUARY",
    desc : "Future LifeWear essentials, designed in pursuit of a simplified, modern wardrobe.A new essential for your new way of life."
   
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resfbdb3c9303a65708c7f922c7dd63b256fr.jpg",
    head : "+J | VIEW COLLECTION",
    desc : "Marking the end of chapter 2 with designer Jil Sander which further develops its signature understatement and quiet distinction."
    
   
           
        
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res1e5990de62ff4e0a54c912cd13fc1f21fr.jpg",
    head : "JW ANDERSON | VIEW cOLLECTION",
    desc :  "This collection blends an urban wardrobe with the serenity of a peaceful weekend  in the country.",
    
  
  
    
  }
]

let special =document.getElementById("special")
feat2(morefeaturedobj2)
function feat2(data){

  data.map(({image,head,desc})=>{
    let div =document.createElement("div");
    let imgdiv =document.createElement("div")

    let img =document.createElement("img")
    img.src =image

    let h4 =document.createElement("h4");
    h4.textContent =head;
    h4.style.paddingLeft ="36px"

    let p =document.createElement("p");
    p.textContent =desc;
    p.style.paddingLeft ="36px"
    p.style.paddingRight ="36px"
    p.style.lineHeight ="18px"
    imgdiv.append(img)
    div.append(imgdiv,h4,p);
    special.append(div)
  })
}


let morefeaturedobj3 =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/rescf9d98a70918ee030b6b49fa785e1b84fr.jpg",
    head : "ULTRA LIGHT DOWN COLLECTION",
    desc : "A new essential for your new way of life."
   
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resef0798d1150ffa6f0c43e7eefb1bd683fr.jpg",
    head : "LOVE & FLEECE",
    desc : "Celebrating 25 years of UNIQLO Fleece"
    
   
           
        
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resa6048cd562199b3ba62d2d026080709cfr.jpg",
    head : "GOODBYE BULKY WINTER CLOTHING",
    desc :  "Turn up the heat with HEATTECH!.",
    
  
  
    
  }
]

let today =document.getElementById("today")
feat3(morefeaturedobj3)
function feat3(data){

  data.map(({image,head,desc})=>{
    let div =document.createElement("div");
    let imgdiv =document.createElement("div")

    let img =document.createElement("img")
    img.src =image

    let h4 =document.createElement("h4");
    h4.textContent =head;
    h4.style.paddingLeft ="36px"

    let p =document.createElement("p");
    p.textContent =desc;
    p.style.paddingLeft ="36px"
    p.style.paddingRight ="36px"
    p.style.lineHeight ="18px"
    imgdiv.append(img)
    div.append(imgdiv,h4,p);
    today.append(div)
  })
}


function storingData(data){
  localStorage.setItem("uniqProd",JSON.stringify(data));
  window.location.href = "./productinfo.html"
}