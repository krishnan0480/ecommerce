function openProduct(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "html/product.html";
}


function buyNow(event,id){
  event.stopPropagation();
  localStorage.setItem("checkoutProductId",id);
  window.location.href="html/checkout.html";
}