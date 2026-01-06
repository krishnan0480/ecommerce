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


function filterByCategory(category) {
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const productCategory = product.dataset.category;

    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function handleCategoryClick(event, category) {
  event.preventDefault();

  filterByCategory(category);

  // ✅ close dropdown
  document.getElementById("categoryMenu").classList.remove("show");
}

function sortProducts(type) {
  const grid = document.querySelector(".products-grid");
  const products = Array.from(grid.children);

  let sortedProducts;

  if (type === "low-high") {
    sortedProducts = products.sort((a, b) =>
      a.dataset.price - b.dataset.price
    );
  }

  if (type === "high-low") {
    sortedProducts = products.sort((a, b) =>
      b.dataset.price - a.dataset.price
    );
  }

  if (type === "rating") {
    sortedProducts = products.sort((a, b) =>
      b.dataset.rating - a.dataset.rating
    );
  }
  grid.innerHTML = "";
  sortedProducts.forEach(product => grid.appendChild(product));
}

function handleFilterClick(event, type) {
  event.preventDefault();

  sortProducts(type);

  document.getElementById("filtermenu").classList.remove("show");
}


document.addEventListener("click", function () {
  document.getElementById("categoryMenu").classList.remove("show");
  document.getElementById("filtermenu").classList.remove("show");
});

