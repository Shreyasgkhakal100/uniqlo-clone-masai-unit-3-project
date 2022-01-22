const newArrivalObj_1 = [
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448954/sub/goods_448954_sub9.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "XS-XL",
        description: "WOMEN Striped Boat Neck Long Sleeve Dress",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445345
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/447403/item/ingoods_65_447403.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Striped Boat Neck Long Sleeve Dress",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445344
    },

    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/429452/item/ingoods_09_429452.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-XXL",
        description: "WOMEN Ultra Light Down Vest",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445343
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445115/item/ingoods_01_445115.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "XS-XXL",
        description: "WOMEN Waffle Crew Neck Long Sleeve Dress",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445342
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445115/item/ingoods_09_445115.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Ultra Light Down Relaxed Jecket",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445341
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445115/item/ingoods_71_445115.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "XS",
        description: "WOMEN Ultra Light Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445340
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445050001/item/ingoods_71_445050001.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "XS-3XL",
        description: "WOMEN Light Pile Lined Fleece Long Sleeve Set",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445339
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445050001/item/ingoods_69_445050001.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "SX-XXL",
        description: "WOMEN Fluffy Yarn Fleece Full-Zip Jecket",
        exclusive: "Exclusive Size Online Only",
        price: 3990,
        id: 44538
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439753/item/ingoods_08_439753.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "XS-3XL",
        description: "WOMEN Soft Flannel Long Sleeve Flare Dress",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445337
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439753/item/ingoods_33_439753.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "SX-XXL",
        description: "WOMEN Fluffy Yarn Fleece Full-Zip Jecket",
        exclusive: "Exclusive Size Online Only",
        price: 3990,
        id: 445336
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/443422001/item/ingoods_07_443422001.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "SX-XL",
        description: "WOMEN Soft Flannel Long Sleeve Flare Dress",
        exclusive: "Exclusive Size Online Only",
        price: 1990,
        id: 445335
    }

];
// console.log(newArrivalObj_1[0].price+newArrivalObj_1[1].price);

displayProducts_1(newArrivalObj_1);
function displayProducts_1(data) {
    document.querySelector(".productSide").innerHTML="";
    data.map(({ image, gendar, size, description, exclusive, price,id }) => {
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

        let productsObj = {
            image,
            gendar,
            size,
            description,
            exclusive,
            price,
            id,
            quantity: 1,
        }
        mainDiv.addEventListener("click", () => {
            storeData(productsObj);
        });

        img.src = image;
        gend.innerText = gendar;
        siz.innerText = size;
        desc.innerText = description;
        exclus.innerText = exclusive;
        pric.innerText = `Rs. ${price}.00`;

        imgDiv.append(img);
        sizeDiv.append(gend, siz);
        mainDiv.append(imgDiv, sizeDiv, desc, exclus, pric);

        document.querySelector(".productSide").append(mainDiv);
    });

}

var sort = document.getElementById("sortProduct");
sort.addEventListener("change", function priceSort() {
    var selected = document.getElementById("sortProduct").value;
    if (selected == "low") {
        newArrivalObj_1.sort(function (a, b) {
            // console.log(a.price)
            return a.price - b.price;

        })
    }
    if (selected == "high") {
        newArrivalObj_1.sort(function (a, b) {
            // console.log(b.price)
            return b.price - a.price;
        })
    }
    
    displayProducts_1(newArrivalObj_1);
});

// Store Data in localStorage here..

function storeData(data) {
    localStorage.setItem("uniqloProd", JSON.stringify(data));
    window.location.href = "./viewProd.html";
}

//for selected option 

var selected1 = document.querySelector(".select1");
selected1.addEventListener("change", () => {

    let select = document.querySelector(".select1").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected2 = document.querySelector(".select2");
selected2.addEventListener("change", () => {

    let select = document.querySelector(".select2").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected3 = document.querySelector(".select3");
selected3.addEventListener("change", () => {

    let select = document.querySelector(".select3").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected4 = document.querySelector(".select4");
selected4.addEventListener("change", () => {

    let select = document.querySelector(".select4").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected5 = document.querySelector(".select5");
selected5.addEventListener("change", () => {

    let select = document.querySelector(".select5").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected6 = document.querySelector(".select6");
selected6.addEventListener("change", () => {

    let select = document.querySelector(".select6").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected7 = document.querySelector(".select7");
selected7.addEventListener("change", () => {

    let select = document.querySelector(".select7").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected8 = document.querySelector(".select8");
selected8.addEventListener("change", () => {

    let select = document.querySelector(".select8").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected9 = document.querySelector(".select9");
selected9.addEventListener("change", () => {

    let select = document.querySelector(".select9").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected10 = document.querySelector(".select10");
selected10.addEventListener("change", () => {

    let select = document.querySelector(".select10").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected11 = document.querySelector(".select11");
selected11.addEventListener("change", () => {

    let select = document.querySelector(".select11").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});



// selectedOpt();
