document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
  });

  const products = document.querySelectorAll(".product button");
  const orderList = document.getElementById("order-list");
  const totalElement = document.getElementById("total");
  let total = 0;

  products.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const name = product.getAttribute("data-name");
      const price = parseFloat(product.getAttribute("data-price"));

      // Add item to order list
      const listItem = document.createElement("li");
      listItem.textContent = `${name} - $${price}`;
      orderList.appendChild(listItem);

      // Update total
      total += price;
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    });
  });
});
