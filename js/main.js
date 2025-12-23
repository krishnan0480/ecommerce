function openProduct(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "html/product.html";
}
