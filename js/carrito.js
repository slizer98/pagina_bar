const addToCar = document.querySelectorAll(".add");
const cartItemsContainer  = document.querySelector('.shoppingCartItemsContainer');

addToCar.forEach(addCartButton => {
    addCartButton.addEventListener('click', addCartClicked);
});

function addCartClicked(event){
   const button = event.target;
   const box = button.closest('.box');

   const boxTitle = box.querySelector('.box-title').textContent;
   const boxPrice = box.querySelector('.box-price').textContent;
   const boxImage = box.querySelector('img').src;   
   addItemsCart(boxTitle, boxPrice, boxImage);
}

function addItemsCart(boxTitle, boxPrice, boxImage){
    const cartRow = document.createElement('div');
    const cartContent = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${boxImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${boxTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${boxPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;
      cartRow.innerHTML = cartContent;
        cartItemsContainer.append(cartRow);
}
