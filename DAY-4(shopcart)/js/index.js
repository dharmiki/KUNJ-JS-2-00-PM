const product = [
    {
        id: Date.now(),
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 1,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_131.gif?v=1698386535",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 2,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_fdcbadf5-5d2d-4ce3-9018-ee3e535fb60b.png?v=1745236290",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 3,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/300_bLACK-min.png?v=1725983268",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 4,
        image: "https://www.boat-lifestyle.com/cdn/shop/products/141white_300x.png?v=1685518916",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 5,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_121_PRO_PLUS_ergonomic_design.45.jpg?v=1718601670",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 6,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LR_ac2ba3c8-3c92-4792-9044-e9d57ff2660d.jpg?v=1749811333",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
    {
        id: Date.now() + 7,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_155.jpg?v=1710499380",
        title: "Wireless Earbuds",
        subtitle: "organic Cotton fairtrade certified",
        price: 100
    },
];

document.getElementById("box").innerHTML = products(product);

function products(product) {
    return product
        .map((el) => {
            return `
        <div class="w-[22%] h-[430px] rounded shadow bg-white m-2">
          <div class="w-full h-[75%]">
            <img src="${el.image}" class="h-full w-full object-cover rounded-t">
          </div>
          <div class="w-full h-[25%] p-2">
            <h5 class="pt-1 font-bold">${el.title}</h5>
            <span class="text-sm text-gray-600">${el.subtitle}</span><br>
           <button onclick="addToCart(${el.id}, '${el.title}', ${el.price}, '${el.image}')" 
  class="mt-3 px-4 py-2 bg-green-800 text-white rounded">
  Add to Cart
</button>
          </div>
        </div>
      `;
        })
        .join("");
}

// Add to cart and store in localStorage
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart`);

    // Optional: Navigate to cart after short delay
    setTimeout(() => {
        window.location.href = "card.html";
    }, 500);
}

// Update cart icon count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    let cartIcon = document.getElementById("cart-count");
    if (cartIcon) {
        cartIcon.textContent = count;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
