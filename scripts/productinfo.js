let getData =JSON.parse(localStorage.getItem("uniqProd")) || [];

showData(getData)
function showData(data){
    let div = document.createElement("div");
    let img =document.createElement("img");
    let img2 =document.createElement("img");
    let nam =document.createElement("h1")
    let des = document.createElement("h2");
    let pric =document.createElement("h4");
    let inclu =document.createElement("h5");
    let per = document.createElement("p");
    let hr =document.createElement("hr");

    inclu.innerText = `inclusive of all taxes`;
    per.innerText = `Supple texture that can be styled elegantly. A convenient blouse that can be worn for both casual and formal occasions.`;
    img.src =data.image;
    img2.src =data.image;
    nam.innerText =data.name;
    des.innerText =data.desc;
    pric.innerText = `MRP Rs.  ${data.price}`;
    div.append(nam,pric,des,inclu,per,hr);
    document.getElementById("smallimg").append(img2);
    document.getElementById("largeimg").append(img);
    document.getElementById("content").append(div);

}