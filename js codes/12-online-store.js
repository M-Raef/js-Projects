//when i click in buy button it will do Done in green color with bootstrab and check icon
const allBuyBtns = document.querySelectorAll(".btn-primary");
const showItems = document.createElement("div");

// updare total price when i ad a t-shirt or change the quantity
const updateTotalPrice = () => {
    const allProductsInBlackScreen = document.querySelectorAll(".item-container")
    let total = 0;

    allProductsInBlackScreen.forEach(item => {
        const price = Number(item.getElementsByClassName("price")[0].innerText.replace("$",""))
        const quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
        total = total +(price*quantity)
    });
    totalPrice.innerText = `$ ${total} `
}

blackScreen.addEventListener("change",(eo) => {
    updateTotalPrice()
})
//=========update total price end =============



//when i click in delete in black screen it will return the default statue
blackScreen.addEventListener("click",(eo) => {
    if (eo.target.classList.contains("btn-secondary")) {
        eo.target.parentElement.remove()
        updateTotalPrice()

        const nameOfDeleteProducts = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText

        const allCardsInGallery = document.querySelectorAll(".card")
        allCardsInGallery.forEach(item => {
            const nameOfProductInGalary = item.getElementsByClassName("card-title")[0].innerText
            
            if (nameOfDeleteProducts == nameOfProductInGalary) {
                const doneButton = item.getElementsByClassName("btn-success")[0]

                doneButton.removeAttribute("disabled")
                doneButton.classList.remove("btn-success")
                doneButton.classList.add("btn-primary")
                doneButton.innerText = "buy"
            }
        });
    }
})





allBuyBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    {
      //change button from "buy" to "Done"
      item.setAttribute("disabled", "");

      item.classList.remove("btn-primary");
      item.classList.add("btn-success");

      item.innerHTML = "&#10004; Done"; // 'https://www.toptal.com/designers/htmlarrows/' = رح اقدر اجيب كود ها الصح من هذا الموفع كمان عنده اكواد لاي عناصر اخرى
      // item.classList.add("icon-check-circle")
      // item.style.position = "static"
    }

    {
      //create Done element and remove it in 4 second
      const popUp = document.createElement("div");
      body.append(popUp);
      popUp.classList.add("done-pop-up");
      popUp.innerHTML = " Done &#10004;";

      setTimeout(() => {
        popUp.style.transform = "translateX(-70vw)";
      }, 2000);
      setTimeout(() => {
        popUp.remove();
      }, 4000);
    }

    {
      //create عرض المشتريات when i click in buy button

      body.append(showItems);

      showItems.classList.add("show-items");
      showItems.innerHTML = " عرض المشتريات ";
    }

    {//whem i click in buy it will added in all Product
    const card = item.parentElement.parentElement.parentElement;
    // const imgSrc = card.getElementsByClassName("card-img-top")[0].src
    const imgSrc = card
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");
    const itemName = card.getElementsByClassName("card-title")[0].innerText;
    const itemPrice = card.getElementsByClassName("price")[0].innerText;
    console.log(imgSrc);

    const addedProduct = `
        <div dir="rtl" class="item-container">

        <div class="img-title-parent">
            <img src="${imgSrc}" alt="">
            <p class="product-name">${itemName}</p>
        </div>

        <div style="display: flex; align-items: center;  ">
            <input type="number" class="input-quantity" dir="ltr" id="input-quantity" value="1" min="1"  >
            <p >Quantity</p>

        </div>

        <div class="price">
            ${itemPrice}
        </div>

        <div class="btn btn-secondary">
            Delete
        </div>

    </div>
`;

    allProducts.innerHTML += addedProduct
    }
    
    updateTotalPrice()
  });
});

showItems.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});

const close = document.getElementById("close");
close.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-120vw)";
});
