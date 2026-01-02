document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const creator = document.getElementById("creator").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const image =
    document.getElementById("image").value || "../images/book1.jpg";

  let products = JSON.parse(localStorage.getItem("sellerProducts")) || [];

  const newProduct = {
    id: Date.now(),
    name,
    creator,
    category,
    price,
    description,
    image,
    sales: 0
  };

  products.push(newProduct);
  localStorage.setItem("sellerProducts", JSON.stringify(products));

  alert("Product published successfully!");

  window.location.href = "sell-dashboard.html";
});
