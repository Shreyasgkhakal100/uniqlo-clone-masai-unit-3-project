const newArrivalObj_1 = [
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446445001/item/goods_01_446445001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE0-3M(50)-AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 690,
        id: 445345
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446445/item/goods_01_446445.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 690,
        id: 445344
    },

    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446443001/item/goods_01_446443001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE0-3M(50)-AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445343
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446441001/item/goods_30_446441001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445342
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446435001/item/goods_11_446435001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 2490,
        id: 445341
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446432001/item/goods_69_446432001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE6-12M(70)-AGE18-24M(90)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit Down Parka",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445340
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446432/item/goods_22_446432.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE6-12M(70)-AGE18-24M(90)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit Set",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445339
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444678001/item/goods_69_444678001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 3990,
        id: 44538
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446399/item/goods_02_446399.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE0-3M(50)-AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit Flare Dress",
        exclusive: "Exclusive Size Online Only",
        price: 2990,
        id: 445337
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444813/item/goods_00_444813.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE0-3M(50)-AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
        exclusive: "Exclusive Size Online Only",
        price: 3990,
        id: 445336
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444813001/item/goods_50_444813001.jpg?width=1008&impolicy=quality_75",
        gendar: "BABY",
        size: "AGE0-3M(50)-AGE3-6M(60)",
        description: "BABIES NEWBORN Joy Of Print Cotton Mesh Inner Bodysuit",
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
