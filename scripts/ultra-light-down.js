const newArrivalObj_1 = [
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439702/item/ingoods_74_439702.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-XXL",
        description: "WOMEN Ultra Light6 Down Jecket",
        exclusive: "Exclusive Size Online Only",
        price: "4,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439704/item/ingoods_71_439704.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Ultra Light Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: "5,990.00"
    },

    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/429452/item/ingoods_09_429452.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-XXL",
        description: "WOMEN Ultra Light Down Vest",
        exclusive: "Exclusive Size Online Only",
        price: "2,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443932/item/goods_09_443932.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S",
        description: "WOMEN Ultra Light Down Jecket",
        exclusive: "Exclusive Size Online Only",
        price: "6,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439707/item/ingoods_56_439707.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Ultra Light Down Relaxed Jecket",
        exclusive: "Exclusive Size Online Only",
        price: "3,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429454/item/goods_07_429454.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S",
        description: "WOMEN Ultra Light Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: "2,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/440037/item/ingoods_34_440037.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Light Pile Lined Fleece Long Sleeve Set",
        exclusive: "Exclusive Size Online Only",
        price: "2,990.00"
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439138/item/ingoods_12_439138.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "SX-XXL",
        description: "WOMEN Fluffy Yarn Fleece Full-Zip Jecket",
        exclusive: "Exclusive Size Online Only",
        price: "3,990.00"
    }

];


displayProducts_1(newArrivalObj_1);
function displayProducts_1(data) {
    data.map(({ image, gendar, size, description, exclusive, price }) => {
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let sizeDiv = document.createElement("div");

        
        let img = document.createElement("img");
        let gend = document.createElement("h3");
        let siz = document.createElement("h3");
        let desc = document.createElement("h2");
        let exclus = document.createElement("h4");
        let pric = document.createElement("h4");
        
        imgDiv.setAttribute("class", "imgDiv");
        sizeDiv.setAttribute("class", "sizeDiv");
        exclus.setAttribute("class", "exclusive");

        let productsObj ={
            image,
            gendar,
            size,
            description,
            exclusive,
            price
        }

        mainDiv.addEventListener("click", ()=>{
            storeData(productsObj);
        });

        img.src = image;
        gend.innerText = gendar;
        siz.innerText = size;
        desc.innerText = description;
        exclus.innerText = exclusive;
        pric.innerText = `Rs. ${price}`;

        imgDiv.append(img);
        sizeDiv.append(gend, siz);
        mainDiv.append(imgDiv, sizeDiv, desc, exclus, pric);

        document.querySelector(".productSide").append(mainDiv);
    });

}

 // Store Data in localStorage here..
 
 function storeData(data){
    localStorage.setItem("uniqloProd", JSON.stringify(data));
    window.location.href= "./viewProd.html";
}