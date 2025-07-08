  const productContainer = document.getElementById('product-container');
  const loader = document.getElementById('loader');
  const toggleButton = document.getElementById('mode-toggle');

  // Toggle Dark/Light Mode
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = document.body.classList.contains('dark') ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
  });

  // Fetch products
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      loader.style.display = 'none';
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description.substring(0, 100)}...</p>
          <div class="price">Price: $${product.price}</div>
          <button class="add-to-cart">Add to Cart</button>
        `;

        card.querySelector('.add-to-cart').addEventListener('click', () => {
          alert(`✅ ${product.title} added to cart!`);
        });

        productContainer.appendChild(card);
      });
    })
    .catch(error => {
      loader.textContent = "❌ Failed to load products.";
      console.error("Error fetching products:", error);
    });
