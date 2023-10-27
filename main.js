///// Input de compra

let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener("click", () => {
    userInputNumber--;
    if (userInputNumber <= 0) userInputNumber = 0;
    userInput.value = userInputNumber;

});


/////Add to cart

const addToCartBtn = document.querySelector(".details__btn");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.textContent);

addToCartBtn.addEventListener("click", () => {
    lastValue = lastValue + userInputNumber;

    cartNotification.textContent = lastValue;
    cartNotification.style.display = "block";
    drawProductInModal();
});


const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(".cart-modal__checkout-container");

cartIconBtn.addEventListener("click", () => {
    cartModal.classList.toggle("show");

    if (lastValue === 0) {
        productContainer.innerHTML = "<p class='cart-empty'>Your cart is empty</p>";
    }
})


/////Gallery

const imgContainer = document.querySelector(".gallery__img-container");
const previousImgBtn = document.querySelector(".gallery__previous");
const nextImgBtn = document.querySelector(".gallery__next");
let imgIndex = 1;
const imgURLs = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];

nextImgBtn.addEventListener("click", () => {
    changeNextImg(imgContainer);
});

previousImgBtn.addEventListener("click", () => {
    changePreviousImg(imgContainer);
});

imgContainer.addEventListener("click", () => {
    if (window.innerWidth >= 1115) {
        imgModal.style.display = "grid";
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
    }
})



/////Modal gallery

const modalImgContainer = document.querySelector(".modal-gallery__img-container");
const imgModal = document.querySelector(".modal-gallery__bg");
const closeModalBtn = document.querySelector(".modal-gallery__close");
const originalOverFlow = document.body.style.overflow;

closeModalBtn.addEventListener("click", () => {
    imgModal.style.display = "none";
    document.body.style.overflow = originalOverFlow;
})

let thumbnails = document.querySelectorAll(".gallery__thumbnail");
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", event => {
        imgContainer.style.backgroundImage = `url("./images/image-product-${event.target.id}.jpg")`;
    })
})

let modalThumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
modalThumbnails = [...modalThumbnails];
modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener("click", event => {
        modalImgContainer.style.backgroundImage = `url("./images/image-product-${event.target.id.slice(-1)}.jpg")`;
    })
})

const previousImgModalBtn = document.querySelector(".modal-gallery__previous");
const nextImgModalBtn = document.querySelector(".modal-gallery__next");

previousImgModalBtn.addEventListener("click", () => {
    changePreviousImg(modalImgContainer);
});

nextImgModalBtn.addEventListener("click", () => {
    changeNextImg(modalImgContainer);
});



//MENU 

const menuBtn = document.querySelector(".header__menu");
const closeMenuBtn = document.querySelector(".modal-navbar__close-icon");
const menuModal = document.querySelector(".modal-navbar__bg");

menuBtn.addEventListener("click", () => {
    menuModal.classList.toggle("show");
})

closeMenuBtn.addEventListener("click", () => {
    menuModal.classList.toggle("show");
})



//FUNCIONES

function deleteProduct() {
    const deleteProductsBtn = document.querySelector(".cart-modal__delete");

    deleteProductsBtn.addEventListener("click", () => {
        productContainer.innerHTML = "<p class='cart-empty'>Your cart is empty</p>";

        lastValue = 0;
        cartNotification.style.display = "none";
    });
}


function drawProductInModal() {
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__img" src="images/image-product-1-thumbnail.jpg" alt="Product thumbnail">
        <div>
           <p class="cart-modal__product">Autumn Limited Edition.</p>
           <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="images/icon-delete.svg" alt="Remove product">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;
    deleteProduct();
    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue * 125}.00</span>`;
}

function changeNextImg(imgContainer) {
    if (imgIndex === 4) imgIndex = 4;
    else imgIndex++;
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`;
}

function changePreviousImg(imgContainer) {
    if (imgIndex === 1) imgIndex = 1;
    else imgIndex--;
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`;
}