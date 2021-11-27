const addToCar = document.querySelectorAll(".add");
const cartItemsContainer  = document.querySelector('.shoppingCartItemsContainer');
const modalCompra = document.querySelector('.modal-compra');

addToCar.forEach(addCartButton => {
    addCartButton.addEventListener('click', addCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);   

function addCartClicked(event){
   const button = event.target;
   const box = button.closest('.box');

   const boxTitle = box.querySelector('.box-title').textContent;
   const boxPrice = box.querySelector('.box-price').textContent;
   const boxImage = box.querySelector('img').src;   
   addItemsCart(boxTitle, boxPrice, boxImage);
}

function addItemsCart(boxTitle, boxPrice, boxImage){

    const elementsTitle = cartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

    for(let i = 0; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerText === boxTitle){
           let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
           elementQuantity.value++;
           $('.toast').toast('show');
            updateShoppingCart();
           return;
        }
    }

    const cartRow = document.createElement('div');
    const cartContent = `
    <div class="row shoppingCartItem w-auto">
          <div class="col-4">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${boxImage} class="shopping-cart-image w-25">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${boxTitle}</h6>
              </div>
          </div>
          <div class="col-3">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${boxPrice}</p>
              </div>
          </div>
          <div class="col-3">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity " type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button"><span>x</span></button>
              </div>
          </div>
      </div>`;
    cartRow.innerHTML = cartContent;
    cartItemsContainer.append(cartRow);

    cartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    cartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);
    
    updateShoppingCart();

}

function updateShoppingCart(){
    let totalPrice = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement =  shoppingCartItem.querySelector('.shoppingCartItemPrice')
        
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
       
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        totalPrice = totalPrice + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${totalPrice.toFixed(2)}`;
}

function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    const buttonRow = buttonClicked.closest('.shoppingCartItem');
    buttonRow.remove();
    updateShoppingCart();
}

function quantityChanged(event){
    const input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateShoppingCart();
}

function comprarButtonClicked(){
    modalCompra.style.display = 'block';
    cartItemsContainer.innerHTML = '';

    setTimeout(function(){
        modalCompra.style.display = 'none';
    }, 2000);
    updateShoppingCart();

}