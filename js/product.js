const productId = localStorage.getItem("selectedProductId");

if (!productId) {
  window.location.href = "../index.html";
}

const product = products.find(p => p.id == productId);

if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productDesc").innerText = product.description;
  document.getElementById("productRating").innerText = "⭐"+ product.rating +"/5";
  document.getElementById("productPrice").innerText = "₹" + product.price;
  document.getElementById("buyBtn").onclick= function(){
  window.location.href="../html/checkout.html";
  };
}