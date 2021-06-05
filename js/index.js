const shipYes = "Możemy wysłać już dzisiaj!";
const shipTime = "Sprawdź czasy i koszty wysyłki";
const valueCurrency = ".00 zł";

fetch('xbox.json')
    .then(data => data.json())
    .then(data => {
        let buttonOrder = document.getElementById("btnOrder");

        // creating a DOM
        const order = document.createElement("div");
        order.id = "order";
        order.className = "order";
        document.body.appendChild(order);

        const orderImageContent = document.createElement("div");
        orderImageContent.id = "orderImageContent";
        order.appendChild(orderImageContent);

        const orderImage = document.createElement("img");
        orderImage.id = "orderImage";
        orderImage.src = "img/xiaomi-cyjan.jpg"
        orderImageContent.appendChild(orderImage);

        const orderContent = document.createElement("div");
        orderContent.id = "orderContent";
        order.appendChild(orderContent);

        const orderContentHeaderClose = document.createElement("div");
        orderContentHeaderClose.id = "orderContentHeaderClose";
        orderContent.appendChild(orderContentHeaderClose);

        const orderContentHeader = document.createElement("p");
        orderContentHeader.id = "orderContentHeader";
        orderContentHeader.innerText = data.product.name;
        orderContentHeaderClose.appendChild(orderContentHeader);

        const orderContentButtonClose = document.createElement("img");
        orderContentButtonClose.id = "orderContentButtonClose";
        orderContentButtonClose.src = "img/close.png"
        orderContentHeaderClose.appendChild(orderContentButtonClose);

        const orderContentPrice = document.createElement("p");
        orderContentPrice.id = "orderContentPrice";
        orderContentPrice.innerText = data.sizes.items.U.price + valueCurrency;
        orderContent.appendChild(orderContentPrice);

        const orderContentSize = document.createElement("p");
        orderContentSize.id = "orderContentSize";
        orderContentSize.innerText = "Rozmiar:";
        orderContent.appendChild(orderContentSize);

        const orderContentButtons = document.createElement("div");
        orderContentButtons.id = "orderContentButtons";
        orderContent.appendChild(orderContentButtons);

        const orderContentButton1 = document.createElement("button");
        orderContentButton1.classList.add('activeborder')
        orderContentButton1.id = "orderContentButton1";
        orderContentButton1.innerText = data.sizes.items.U.name;
        orderContentButtons.appendChild(orderContentButton1);

        const orderContentButton2 = document.createElement("button");
        orderContentButton2.id = "orderContentButton2";
        orderContentButton2.innerText = data.sizes.items.V.name;
        orderContentButtons.appendChild(orderContentButton2);

        const orderContentButton3 = document.createElement("button");
        orderContentButton3.id = "orderContentButton3";
        orderContentButton3.innerText = data.sizes.items.W.name;
        orderContentButtons.appendChild(orderContentButton3);

        const orderContentVariant = document.createElement("p");
        orderContentVariant.id = "orderContentVariant";
        orderContentVariant.innerText = "Wariant:";
        orderContent.appendChild(orderContentVariant);

        const orderContentSelect = document.createElement("select");
        orderContentSelect.id = "orderContentSelect";
        orderContent.appendChild(orderContentSelect);

        const orderContentSelectOption1 = document.createElement("option");
        orderContentSelectOption1.id = "orderContentSelectOption1";
        orderContentSelectOption1.innerText = data.multiversions[0].items['1-1'].values[61].name;
        orderContentSelect.appendChild(orderContentSelectOption1);

        const orderContentSelectOption2 = document.createElement("option");
        orderContentSelectOption2.id = "orderContentSelectOption2";
        orderContentSelectOption2.innerText = data.multiversions[0].items['1-2'].values[60].name;
        orderContentSelect.appendChild(orderContentSelectOption2);

        const orderContentSelectOption3 = document.createElement("option");
        orderContentSelectOption3.id = "orderContentSelectOption3";
        orderContentSelectOption3.innerText = data.multiversions[0].items['1-3'].values[59].name;
        orderContentSelect.appendChild(orderContentSelectOption3);

        const orderContentInfo = document.createElement("div");
        orderContentInfo.id = "orderContentInfo";
        orderContent.appendChild(orderContentInfo);

        const orderContentInfoImgOk = document.createElement("img");
        orderContentInfoImgOk.id = "orderContentInfoImgOk";
        orderContentInfoImgOk.src = "img/ok.png";
        orderContentInfo.appendChild(orderContentInfoImgOk);

        const orderContentInfoStatus = document.createElement("p");
        orderContentInfoStatus.id = "orderContentInfoStatus";
        orderContentInfoStatus.innerText = data.sizes.items.U.status;
        orderContentInfo.appendChild(orderContentInfoStatus);

        const orderContentInfoImgTime = document.createElement("img");
        orderContentInfoImgTime.src = "img/delivery-time-tool@1X.png";
        orderContentInfo.appendChild(orderContentInfoImgTime);

        const orderContentInfoShip = document.createElement("div");
        orderContentInfo.appendChild(orderContentInfoShip);

        const orderContentInfoShip1 = document.createElement("p");
        orderContentInfoShip1.id = "orderContentInfoShip1";
        orderContentInfoShip1.innerText = shipYes;
        orderContentInfoShip.appendChild(orderContentInfoShip1);

        const orderContentInfoShip2 = document.createElement("p");
        orderContentInfoShip2.id = "orderContentInfoShip2";
        orderContentInfoShip2.innerText = shipTime;
        orderContentInfoShip.appendChild(orderContentInfoShip2);

        const orderContentButtonsOrders = document.createElement("div");
        orderContentButtonsOrders.id = "orderContentButtonsOrders";
        orderContent.appendChild(orderContentButtonsOrders);

        const orderContentButtonCounter = document.createElement("div");
        orderContentButtonCounter.id = "counter";
        orderContentButtonsOrders.appendChild(orderContentButtonCounter);

        const orderContentButtonSubstract = document.createElement("button");
        orderContentButtonSubstract.id = "substract";
        orderContentButtonSubstract.innerText = "-";
        orderContentButtonCounter.appendChild(orderContentButtonSubstract);

        const orderContentButtonCount = document.createElement("span");
        orderContentButtonCount.id = "count";
        orderContentButtonCount.innerText = "0";
        orderContentButtonCounter.appendChild(orderContentButtonCount);

        const orderContentButtonAdd = document.createElement("button");
        orderContentButtonAdd.id = "add";
        orderContentButtonAdd.innerText = "+";
        orderContentButtonCounter.appendChild(orderContentButtonAdd);

        const orderContentMakeOrder = document.createElement("button");
        orderContentMakeOrder.id = "orderContentMakeOrder";
        orderContentMakeOrder.innerText = "Dodaj do koszyka";
        orderContentButtonsOrders.appendChild(orderContentMakeOrder);

        const overlay = document.createElement("div");
        overlay.id = "overlay";
        overlay.className = "overlay";
        document.body.appendChild(overlay);
        
        const buttonelements = document.querySelectorAll('#orderContentButtons button');
        let count = 0;
        let acctualprice = 1250;

        // The functionality of assigning a price for individual variants

        orderContentButton1.addEventListener("click", (event) => {
            buttonelements.forEach((e) => {
                e.classList.remove('activeborder');
            })
            event.target.classList.add('activeborder');
            if (orderContentSelect.value === "Cyjan") {
                orderContentPrice.innerText = parseFloat(data.sizes.items.U.price) + valueCurrency;
                acctualprice = data.sizes.items.U.price;
            } else if (orderContentSelect.value === "Niebieski") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.U.price) - 50) + valueCurrency;
                acctualprice = data.sizes.items.U.price;
            } else if (orderContentSelect.value === "Czarny") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.U.price) - 100) + valueCurrency;
                acctualprice = data.sizes.items.U.price;
            } else {
                orderContentPrice.innerText = parseFloat(data.sizes.items.U.price) + valueCurrency;
                acctualprice = data.sizes.items.U.price;
            }
            orderContentInfoStatus.innerText = data.sizes.items.U.status;
            orderContentInfoImgOk.src = "img/ok.png";
            count = 0;
            orderContentButtonCount.innerText = count;
        });
        
        orderContentButton2.addEventListener("click", (event) => {
            buttonelements.forEach((e) => {
                e.classList.remove('activeborder');
            })
            event.target.classList.add('activeborder');
            if (orderContentSelect.value === "Cyjan") {
                orderContentPrice.innerText = parseFloat(data.sizes.items.V.price) + valueCurrency;
                acctualprice = data.sizes.items.V.price;
            } else if (orderContentSelect.value === "Niebieski") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.V.price) - 50) + valueCurrency;
                acctualprice = data.sizes.items.V.price;
            } else if (orderContentSelect.value === "Czarny") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.V.price) - 100) + valueCurrency;
                acctualprice = data.sizes.items.V.price;
            } else {
                orderContentPrice.innerText = parseFloat(data.sizes.items.V.price) + valueCurrency;
                acctualprice = data.sizes.items.V.price;
            }
            orderContentInfoStatus.innerText = data.sizes.items.V.status;
            orderContentInfoImgOk.src = "img/ok.png";
            count = 0;
            orderContentButtonCount.innerText = count;
        });

        orderContentButton3.addEventListener("click", (event) => {
            buttonelements.forEach((e) => {
                e.classList.remove('activeborder');
            })
            event.target.classList.add('activeborder');
            if (orderContentSelect.value === "Cyjan") {
                orderContentPrice.innerText = parseFloat(data.sizes.items.W.price) + valueCurrency;
                acctualprice = data.sizes.items.W.price;
            } else if (orderContentSelect.value === "Niebieski") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.W.price) - 50) + valueCurrency;
                acctualprice = data.sizes.items.W.price;
            } else if (orderContentSelect.value === "Czarny") {
                orderContentPrice.innerText = parseFloat((data.sizes.items.W.price) - 100) + valueCurrency;
                acctualprice = data.sizes.items.W.price;
            } else {
                orderContentPrice.innerText = parseFloat(data.sizes.items.W.price) + valueCurrency;
                acctualprice = data.sizes.items.W.price;
            }
            orderContentInfoStatus.innerText = data.sizes.items.W.status;
            orderContentInfoImgOk.src = "img/not_avaiable.png";
            count = 0;
            orderContentButtonCount.innerText = count;
        });

        orderContentSelect.addEventListener("input", (event) => {
            if (event.target.value === "Cyjan") {
                orderImage.src = "img/xiaomi-cyjan.jpg";
                orderContentPrice.innerText = parseFloat(acctualprice) + valueCurrency;
            } else if (event.target.value === "Niebieski") {
                orderImage.src = "img/xiaomi-blue.png";
                orderContentPrice.innerText = parseFloat((acctualprice) - 50) + valueCurrency;
            } else if (event.target.value === "Czarny") {
                orderImage.src = "img/xiaomi-black.jpg";
                orderContentPrice.innerText = parseFloat((acctualprice) - 100) + valueCurrency;
            } else {
                orderImage.src = "img/xiaomi-cyjan.jpg";
                orderContentPrice.innerText = parseFloat(acctualprice) + valueCurrency;
            }
        });

        // Functionality limiting the number of pieces in the order

        orderContentButtonSubstract.addEventListener("click", (e) => {
            if (count > 0) {
                count--;
                orderContentButtonCount.innerText = count;
            } else {
                orderContentButtonCount.innerText = "0";
            }
        });

        orderContentButtonAdd.addEventListener("click", (e) => {

            if (orderContentPrice.innerText <= "1250.00 zł") {
                if (count === 1) {
                    orderContentButtonCount.innerText = "1";
                } else {
                    count++;
                    orderContentButtonCount.innerText = count;
                }
            } else if (orderContentPrice.innerText <= "1490.00 zł") {
                if (count === 12) {
                    orderContentButtonCount.innerText = "12";
                } else {
                    count++;
                    orderContentButtonCount.innerText = count;

                }
            } else if (orderContentPrice.innerText <= "1590.00 zł") {
                if (count === 12) {
                    orderContentButtonCount.innerText = "12";
                } else {
                    count++;
                    orderContentButtonCount.innerText = count;

                }
            } else if (orderContentPrice.innerText <= "1990.00 zł") {
                count = 0;
                orderContentButtonCount.innerText = "0";
            }

        });

        buttonOrder.addEventListener("click", (e) => {
            order.id = "order-active";
            overlay.id = "overlay-active";

        });

        orderContentButtonClose.addEventListener("click", (e) => {
            order.id = "order";
            overlay.id = "overlay";
        });

    })
    .then()
    .catch(err => console.log(err));