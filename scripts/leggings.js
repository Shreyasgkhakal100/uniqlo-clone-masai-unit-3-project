const newArrivalObj_1 = [
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446503/item/ingoods_12_446503.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-XXL",
        description: "WOMEN AIRism UV Protection Soft Leggings",
        exclusive: "Exclusive Size Online Only",
        price: 1990,
        id: 445346
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446503/item/ingoods_67_446503.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Ultra Light Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: 1990,
        id: 445347
    },

    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/433741/item/ingoods_11_433741.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-XXL",
        description: "WOMEN Extra Stretch High Rise Leggings Trousers",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445348
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439241/item/ingoods_18_439241.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S",
        description: "WOMEN Ultra Light Down Jecket",
        exclusive: "Exclusive Size Online Only",
        price: 1490,
        id: 445349
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439241/item/ingoods_01_439241.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S",
        description: "WOMEN Ultra Light Down Jecket",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445350
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439707/item/ingoods_56_439707.jpg?width=1008&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Extra Stretch High Rise Leggings Trousers",
        exclusive: "Exclusive Size Online Only",
        price: 1990,
        id: 445351
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439241/item/ingoods_34_439241.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Extra Stretch High Rise Leggings Trousers",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445352
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439241/item/ingoods_54_439241.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S",
        description: "WOMEN Ultra Light Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: 1490,
        id: 445353
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/433741/item/ingoods_57_433741.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "S-3XL",
        description: "WOMEN Light Pile Lined Fleece Long Sleeve Set",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445355
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/433741/item/ingoods_19_433741.jpg?width=1600&impolicy=quality_75",
        gendar: "WOMEN",
        size: "SX-XXL",
        description: "WOMEN Extra Stretch High Rise Leggings Trousers",
        exclusive: "Exclusive Size Online Only",
        price: 1990,
        id: 4453456
    }

];
// console.log(newArrivalObj_1[0].price+newArrivalObj_1[1].price);

displayProducts_1(newArrivalObj_1);
function displayProducts_1(data) {
    document.querySelector(".productSide").innerHTML="";
    data.map(({ image, gendar, size, description, exclusive, price ,id}) => {
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
