let newMenObj=[
    {
        image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/437877/item/ingoods_12_437877.jpg?width=1008&impolicy=quality_75",
        gender : "KIDS",
        size  : "4-5Y(110)-14Y(160)",
        name : "KIDS Uniqlo U AIRism Cotton Crew Neck T-Shirt",
         desc : "New Color",
        price :  990
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446717/item/ingoods_10_446717.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name : "GIRLS Smooth Cotton Frill Short  Sleeve T-Shirt",
   
      desc : "New Arrival",
      price :  990
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448847/item/ingoods_09_448847.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5YC110-14YC160)",
      name : "GIRLS Easy Gingham Checked Shorts",
     
      desc :  "New Arrival",
      price :  990
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/447997/item/ingoods_38_447997.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name : "KIDS Striped Short Sleeve T-Shirt",
      desc :  "New Arrival",
      price :  990
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
  
       let pric = document.createElement("h5");
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
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439815/item/ingoods_70_439815.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Light warm Padded Parka",
      desc : "",
      price :  2990,
     
      star : "⭐⭐⭐⭐(19)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439412/item/ingoods_70_439412.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Pile Lined Sweat Pants",
      desc : "",
      price : 690,
      
      star : "⭐⭐⭐⭐(12)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439328/item/ingoods_11_439328.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name : "KIDS Pile Lined Fleece Set (Long Sleeve)", 
      desc : "",
      price : 1990,
   
      star : "⭐⭐⭐⭐(29)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439433/item/ingoods_09_439433.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Ultra Light Down Jacket (3D Cut)",
      desc : "",
      price : 1990,
     
      star : "⭐⭐⭐⭐(64)",
    },
  ]
   let limited_off =document.getElementById("limited_offer");
   limitedOffers(newMenObj2)
  function limitedOffers(data){
  
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
  
     
      let pric = document.createElement("p");
      pric.textContent =`Rs. ${price}`;
     
  
         
      let str = document.createElement("p");
      str.textContent =star;
      // str.style.border ="0"
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
      div.append(imgdiv,sizediv,nam,pric,str);
      limited_off.append(div)
    })
}


let newMenObj3= [
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439631/item/ingoods_69_439631.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Frill Sleeve Long Sleeve T-Shirt",
     desc : "",
      striked_price : "Rs. 990.00",
      price : 590,
      limited : "Sale",
      star : "⭐⭐⭐⭐⭐(1)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439305/item/ingoods_30_439305.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Smart Ankle Trousers 2WAY Stretch Cotton",
      desc : "",
      striked_price :"Rs. 2,490.00",
      price : 1490,
      limited : "Sale",
      star : "",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/425209/item/ingoods_02_425209.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name : "KIDS Souffle Yarn Mock Neck Long Sleeve Sweater", 
      desc : "",
      striked_price :"Rs. 1,290.00",
      price :990,
      limited :"Sale",
      star : "⭐⭐⭐⭐(2)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439321/item/ingoods_60_439321.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  : "4-5Y(110)-14Y(160)",
      name :  "KIDS Supima Cotton Oversized Stand Collar Shirt",
      desc : "",
      striked_price : "Rs. 1,290.00",
      price : 990,
      limited : "Sale",
      star : "",
    },
  ]
   let sale =document.getElementById("sale_product")
   SaleOffers(newMenObj3)
  function  SaleOffers(data){
  
    data.map(({image,gender,size,name,desc,striked_price,price,limited,star})=>{
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
      des.textContent = desc;
    //   des.id ="desc"
  
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
      // str.style.border ="0"
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
      div.append(imgdiv,sizediv,nam,striked,pric,limit,str);
      sale.append(div)
    })
  }
  
 
let newMenObj4=[
    {
        image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444912/item/ingoods_30_444912.jpg?width=1008&impolicy=quality_75",
        gender : "KIDS",
        size  : "4-5Y(110)-14Y(160)",
        name : "KIDS Extra Stretch Dry Sweat Long Sleeve Full-Zip Hoodie",
          desc : "",
        price : 1990,
        star : "",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444918/item/ingoods_09_444918.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  :  "4-5Y(110)-14Y(160)",
      name : "KIDS Extra Stretch Dry Sweat Trousers",
      
      desc : "New Color",
      price : 1290,
      star : "⭐⭐⭐⭐⭐(3)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439366/item/ingoods_08_439366.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  :  "4-5Y(110)-14Y(160)",
      name :  "KIDS Extra Stretch Dry Sweat Sleeve",
      desc : "Exclusive Size Online Only",
      price : 1990,
      star : "⭐⭐⭐⭐⭐(1)",
    },
    {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444913/item/ingoods_03_444913.jpg?width=1008&impolicy=quality_75",
      gender : "KIDS",
      size  :  "4-5Y(110)-14Y(160)",
      name : "KIDS Ultra Stretch Dry Sweat Trousers",
      desc : "Limited Store",
      price : 1290,
      star : "",
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
      image : "https://im.uniqlo.com/global-cms/spa/res02156fa151d65c40fae90d008dcc133cfr.jpg",
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/resaa7269e01e60b9834607440c7ad28a76fr.jpg",
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res04ba10a9ea7eb2bcfd40ba53fa5dbd3ffr.jpg",
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res4490c6b9e9f805a4fec5594bbe58816efr.jpg"
    },
    {
      image :"https://im.uniqlo.com/global-cms/spa/res2e8a2c26e8dc74eeb0cb161a7707f48bfr.jpg"
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res5b97329b98066852edf35167374d69a6fr.jpg"
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res620af62cf45bb3522274aa0e3be1e512fr.jpg"
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res35cd89d13012d60e465012395d35c41dfr.jpg"
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res2e296713bf1df29e3c6d9fc6f97c67cafr.jpg"
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
      image : "https://im.uniqlo.com/global-cms/spa/res2e98846b0ba4832ff9a67ecad4542c79fr.jpg",
      head : "FLEECE COLLECTION",
      desc : "A new essential for your new way of life."
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res461156f0b63e4205061d24bdff47b329fr.jpg",
      head :  "HEATTECH COLLECTION",
      desc : "Express your personality and stay cozy all season long - just reach for your  favorite fleece."
               
          
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res96675cbb1e376cfe190b96bd027fd5b1fr.jpg",
      head : "KIDS AND BABY CATALOGUE",
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

  
let morefeaturedobj3 =[
    {
      image : "https://im.uniqlo.com/global-cms/spa/res9bcb569ae3f175c2e77d26cd734e081cfr.jpg",
      head : "10 STYLISH TIPS FOR DRESSING YOUR BABY GIRL",
     
      desc : "Dressing your baby girl can be real fun and thoroughly enjoyable endeavor."
      
     
    },
    {
      image : "https://im.uniqlo.com/global-cms/spa/res3b014e20853d2ee0c6bfe38b7d30da76fr.jpg",
      head : "HOW DOES HEATTECH CLOTHING ACTUALLY  WORK?",
 
      desc : "HEATTECH clothing took many years to  perfect and its technology is a layer of air  between the fibers preventing the heat from escaping."
    
 
      
      
     
             
          
    },
    {
      image : "https://www.uniqlo.com/in/en/news/topics/2021111701/img/mimg_1_m.jpg",
      head : "GOODBYE BULKY WINTER CLOTHING",
      desc :  "Wear less, More Warmth. Innovative  fabric generates heat from your body  moisture",
    
  
      
    
    
      
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