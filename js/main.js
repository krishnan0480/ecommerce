function handleLogin() {
  window.location.href = "/html/login.html";
}

function openProduct(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "/html/product.html";
}

function handleSell(event) {
  event.preventDefault();
  event.stopPropagation();
  if (!requireLogin("/html/sell-dashboard.html")) return;
  window.location.href = "/html/sell-dashboard.html";
}
