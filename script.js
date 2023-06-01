function adjustQuantity(itemId, amount) {
    var quantityElement = document.getElementById(itemId + '-quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + amount;
  
    if (newQuantity >= 0) {
      quantityElement.textContent = newQuantity;
      updateTotalPrice();
    }
  }
  
  function deleteItem(itemId) {
    var itemElement = document.querySelector('#' + itemId);
    itemElement.parentNode.removeChild(itemElement);
    updateTotalPrice();
  }
  
  function toggleLike(itemId) {
    var likeButton = document.querySelector('#' + itemId + ' .like');
    likeButton.classList.toggle('liked');
  }
  
  function updateTotalPrice() {
    var itemElements = document.querySelectorAll('.item');
    var totalPrice = 0;
  
    itemElements.forEach(function(itemElement) {
      var quantity = parseInt(itemElement.querySelector('.details span').textContent);
      var price = parseInt(itemElement.querySelector('.details p').textContent.substr(1));
      totalPrice += quantity * price;
    });
  
    document.getElementById('total-price').textContent = totalPrice;
  }
  