// var DataLs = [
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
//       name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
//       price: "1170",
//       strikedoffprice: "$2599",
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
//       name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
//       price: 699,
//       strikedoffprice: 999,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
//       name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
//       price: 945,
//       strikedoffprice: 2099,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
//       name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
//       price: 399,
//       strikedoffprice: 799,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
//       name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
//       price: 1620,
//       strikedoffprice: 3599,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
//       name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
//       price: 1440,
//       strikedoffprice: 3199,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
//       name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
//       price: 1999,
//       strikedoffprice: 3199,
//     }
//   ];

let DataLs = JSON.parse(localStorage.getItem("addedcart")) || [];

if (DataLs.length == 0 || DataLs == null) {
  document.querySelector("body").innerHTML = "";
  let NoItemCart_div = document.createElement("div");
  NoItemCart_div.setAttribute("class", "NoItemCart");
  let H2 = document.createElement("h2");
  H2.innerText = "Your Cart.";
  let P1 = document.createElement("p");
  P1.innerText = "You do not have anything in your shopping cart.";
  P1.style.color = "red";
  let P2 = document.createElement("p");
  P2.innerText = "You should continue shopping and add something to your cart!";
  let P3 = document.createElement("p");
  P3.innerText =
    "You can also Sign in / Create an account to earn up to 50% Cashback on eligible purchases.";
  let P4 = document.createElement("p");
  P4.innerText =
    "SHOP.COM makes online shopping easy by allowing shoppers to shop across million of products, hundreds of stores and thousands of name brands with the convenience of OneCart®, our universal shopping cart.";
  NoItemCart_div.append(H2, P1, P2, P3, P4);
  document.querySelector("body").append(NoItemCart_div);
} else {
  displayTable(DataLs);

  // displayTable function

  function displayTable(DataLs) {
    DataLs.forEach(function (el, index) {
      let shipment_div = document.createElement("div");
      shipment_div.setAttribute("class", "shipmentDiv");
      let shipment_text = document.createElement("h3");
      shipment_text.innerText = "Shipment from Pertemba US";
      let hr = document.createElement("hr");

      let shipment_msg_div = document.createElement("div");
      shipment_msg_div.setAttribute("class", "shipmentMsgDiv");
      let shipment_img = document.createElement("img");
      shipment_img.setAttribute(
        "src",
        "https://www.kindpng.com/picc/m/10-108628_shipping-truck-png-icon-truck-vector-png-transparent.png"
      );

      let shipment_msg = document.createElement("p");
      shipment_msg.innerText =
        "Congratulations! Your order qualifies for free shipping from Pertemba US";
      shipment_msg_div.append(shipment_img, shipment_msg);

      shipment_div.append(shipment_text, hr, shipment_msg_div);

      // Product_div

      let product_div = document.createElement("div");
      product_div.setAttribute("class", "productDiv");
      let pic = document.createElement("img");
      pic.setAttribute("src", el.image);
      let product_info = document.createElement("div");
      product_info.setAttribute("class", "productInfo");
      let p1 = document.createElement("p");
      p1.innerText = el.name;
      let p2 = document.createElement("p");
      p2.setAttribute("class", "cartPrice");
      p2.innerText = el.price;
      let brandname = document.createElement("p");
      brandname.innerText = `Sold By: ${el.brandname}`;
      let productBrand = document.createElement("p");
      productBrand.innerText = el.productBrand;
      let color = document.createElement("p");
      color.innerText = `Color: ${el.color}`;

      // quantity_div

      let quantity_div = document.createElement("div");
      quantity_div.setAttribute("class", "quantityDiv");
      let quantity_text = document.createElement("p");
      quantity_text.innerText = "Quantity:";
      let input = document.createElement("input");
      input.setAttribute("class", "quantityInput");
      input.setAttribute("type", "number");
      input.setAttribute("min", 1);
      input.setAttribute("value", 1);

      let update_text = document.createElement("p");
      update_text.innerText = "Update";

      // button_div

      let button_div = document.createElement("div");
      button_div.setAttribute("class", "buttonDiv");
      let btn1 = document.createElement("button");
      btn1.innerText = "Save for Later";
      let btn2 = document.createElement("button");
      btn2.innerText = "Remove";
      btn2.addEventListener("click", function () {
        del(el, index);
      });
      button_div.append(btn1, btn2);

      let hr1 = document.createElement("hr");
      hr1.setAttribute("class", "aboveStoreTotal");

      // total_div

      let price = +el.price;
      let total_div = document.createElement("div");
      total_div.setAttribute("class", "totalDiv");
      let total_text = document.createElement("p");
      total_text.innerText = "Store total:";
      let totalPrice_text = document.createElement("p");
      // totalPrice_text.setAttribute("class","totalPrice");
      totalPrice_text.innerText = el.price;

      input.addEventListener("change", function () {
        let quantity_item = input.value;
        totalPrice = quantity_item * price;
        totalPrice = Math.round(totalPrice * 100) / 100;
        totalPrice_text.innerText = totalPrice;
      });

      total_div.append(total_text, totalPrice_text);
      quantity_div.append(quantity_text, input, update_text);
      product_info.append(p1, p2, brandname, productBrand, color, quantity_div);
      product_div.append(pic, product_info, button_div);

      document
        .querySelector(".container")
        .append(shipment_div, product_div, hr1, total_div);
    });

    // ORDER TOTAL DIV:

    let order_text = document.createElement("h3");
    order_text.innerText = "Order Total";
    let hr = document.createElement("hr");
    let subTotal_div = document.createElement("div");
    let subTotal_text = document.createElement("p");
    subTotal_text.innerText = "Subtotal:";
    let subtotalPrice_text = document.createElement("p");
    subtotalPrice_text.setAttribute("class", "subtotalPrice");
    // subtotalPrice_text.innerText=SubtotalPrice;

    let continueshopping_text = document.createElement("p");
    continueshopping_text.innerText = "Continue Shopping";

    let shipping_div = document.createElement("div");
    let zip_input = document.createElement("input");
    zip_input.setAttribute("type", "number");
    zip_input.setAttribute("placeholder", "zip code");
    let btn3 = document.createElement("button");
    btn3.innerText = "Estimate Shipping";
    shipping_div.append(zip_input, btn3);

    let btn4 = document.createElement("button");
    btn4.innerText = "Proceed to Checkout";
    btn4.addEventListener("click",paymentpage);

    let checkoutwith_text = document.createElement("p");
    checkoutwith_text.innerText = "Or checkout with:";

    let credit_div = document.createElement("div");
    let cred1 = document.createElement("img");
    cred1.setAttribute(
      "src",
      "https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png"
    );
    let cred2 = document.createElement("img");
    cred2.setAttribute(
      "src",
      "https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
    );
    let cred3 = document.createElement("img");
    cred3.setAttribute(
      "src",
      "https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936"
    );
    credit_div.append(cred1, cred2, cred3);

    subTotal_div.append(subTotal_text, subtotalPrice_text);

    document
      .querySelector("#orderTotal")
      .append(
        order_text,
        hr,
        subTotal_div,
        continueshopping_text,
        shipping_div,
        btn4,
        checkoutwith_text,
        credit_div
      );

    updateCartTotal();
  }
} // display_table function end

// Delete Item

function del(el, index) {
  DataLs.splice(index, 1);

  localStorage.setItem("addedcart", JSON.stringify(DataLs));
  window.location.reload();
}

// Quantity Change Calculation

let quantityInput = document.getElementsByClassName("quantityInput");
for (let i = 0; i < quantityInput.length; i++) {
  let input = quantityInput[i];
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  let input = event.target;
  console.log(input.value);
  updateCartTotal();
}

function updateCartTotal() {
  let cartContainer = document.getElementsByClassName("container")[0];
  let innerContainer = cartContainer.getElementsByClassName("productDiv");
  let CartTotal = 0;
  for (let i = 0; i < innerContainer.length; i++) {
    let cartRow = innerContainer[i];
    let pricelement = cartRow.getElementsByClassName("cartPrice")[0];
    let quantityelement = cartRow.getElementsByClassName("quantityInput")[0];
    let price = +pricelement.innerText;
    let quantity = quantityelement.value;
    CartTotal = parseFloat(CartTotal + quantity * price);
  }
  CartTotal = Math.round(CartTotal * 100) / 100;
  document.querySelector(".subtotalPrice").innerText = `$ ${CartTotal}`;
}


// Redirect to Payment page
function paymentpage(){

  window.location.href="Paymentpage.html"
}