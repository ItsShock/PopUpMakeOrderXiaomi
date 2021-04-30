
const button = document.querySelector("#btnOrder")

var xbox1;

fetch('xbox.json')
.then(data => data.json())
.then(data => {
    xbox1 = data.product.name
})
.then(console.log(xbox1))
.catch(err => console.log(err));

console.log(xbox1);

const order = document.createElement("div");
order.id = "order";
document.body.appendChild(order);

const orderImage = document.createElement("img");
orderImage.id = "orderImage";
orderImage.src = "img/MICROSOFT-XBOXONE-S-1TB-FH4-ACO-F19-887802-front.jpg"
order.appendChild(orderImage);

const orderContent = document.createElement("div");
orderContent.id = "orderContent";
order.appendChild(orderContent);

const orderContentHeader = document.createElement("h1")
orderContentHeader.id = "orderContentHeader";
orderContentHeader.innerText = xbox1;
orderContent.appendChild(orderContentHeader);


// button.addEventListener("click", () => {

// })