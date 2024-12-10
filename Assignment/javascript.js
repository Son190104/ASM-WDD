
//js cho phần banner động
const slides = document.querySelectorAll('#Banner .slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active'); // Ẩn slide hiện tại
    currentIndex = (currentIndex + 1) % slides.length; // Tăng chỉ số slide, quay lại slide đầu khi đến cuối
    slides[currentIndex].classList.add('active'); // Hiển thị slide tiếp theo
}

// Chạy slide tự động mỗi 3 giây
setInterval(showNextSlide, 3000);




//model cho nút mua ngay
function openModal(title, image, status, price) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalImage').src = image;
  document.getElementById('modalStatus').innerText = status;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
      closeModal();
  }
}

//model cho nút sở hữu ngay
let cart = [];
let cartCount = 0;
let cartTotal = 0;

function openModal(title, image, status, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalStatus').innerText = status;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function addToCart() {
    const title = document.getElementById('modalTitle').innerText;
    const image = document.getElementById('modalImage').src;
    const price = document.getElementById('modalPrice').innerText;
    const color = document.getElementById('modalColor').value;
    const size = document.getElementById('modalSize').value;

    if (color === "" || size === "") {
        alert("Please select color and size.");
        return;
    }

    const product = { title, image, price, color, size };
    cart.push(product);
    cartCount++;
    cartTotal += parseInt(price.replace(/[^0-9]/g, ''));
    updateCart();
    closeModal();
}

function updateCart() {
    document.getElementById('cartCount').innerText = cartCount;
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <p>${item.title}</p>
                <p>${item.price}</p>
                <p>Color: ${item.color}, Size: ${item.size}</p>
            </div>
            <button onclick="removeFromCart(${index})">Delete</button>
        `;
        cartItems.appendChild(cartItem);
    });
    document.getElementById('cartTotal').innerText = `Total estimated amount: ${cartTotal.toLocaleString()} VND`;
}

function removeFromCart(index) {
    cartTotal -= parseInt(cart[index].price.replace(/[^0-9]/g, ''));
    cart.splice(index, 1);
    cartCount--;
    updateCart();
}

function toggleCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === "block") {
        cartModal.style.display = "none";
    } else {
        cartModal.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}


//js của trang áo nam
document.getElementById('colorFilter').addEventListener('change', filterProducts);
        document.getElementById('sizeFilter').addEventListener('change', filterProducts);
        document.getElementById('priceFilter').addEventListener('change', filterProducts);
        document.getElementById('sortFilter').addEventListener('change', sortProducts);

        function filterProducts() {
            var color = document.getElementById('colorFilter').value;
            var size = document.getElementById('sizeFilter').value;
            var price = document.getElementById('priceFilter').value;

            var products = document.querySelectorAll('.product-item');
            products.forEach(function(product) {
                var productColor = product.getAttribute('data-color');
                var productSize = product.getAttribute('data-size');
                var productPrice = parseInt(product.getAttribute('data-price'));

                var priceRange = price.split('-');
                var minPrice = parseInt(priceRange[0]);
                var maxPrice = parseInt(priceRange[1]);

                if ((color === '' || productColor === color) &&
                    (size === '' || productSize === size) &&
                    (price === '' || (productPrice >= minPrice && productPrice <= maxPrice))) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        function sortProducts() {
            var sortValue = document.getElementById('sortFilter').value;
            var productList = document.getElementById('productList');
            var products = Array.from(productList.getElementsByClassName('product-item'));

            products.sort(function(a, b) {
                var priceA = parseInt(a.getAttribute('data-price'));
                var priceB = parseInt(b.getAttribute('data-price'));

                if (sortValue === 'price-asc') {
                    return priceA - priceB;
                } else if (sortValue === 'price-desc') {
                    return priceB - priceA;
                } else {
                    return 0;
                }
            });

            products.forEach(function(product) {
                productList.appendChild(product);
            });
        }

//js cho trang quần nam
document.getElementById('colorFilter').addEventListener('change', filterProducts);
        document.getElementById('sizeFilter').addEventListener('change', filterProducts);
        document.getElementById('priceFilter').addEventListener('change', filterProducts);
        document.getElementById('sortFilter').addEventListener('change', sortProducts);

        function filterProducts() {
            var color = document.getElementById('colorFilter').value;
            var size = document.getElementById('sizeFilter').value;
            var price = document.getElementById('priceFilter').value;

            var products = document.querySelectorAll('.product-item');
            products.forEach(function(product) {
                var productColor = product.getAttribute('data-color');
                var productSize = product.getAttribute('data-size');
                var productPrice = parseInt(product.getAttribute('data-price'));

                var priceRange = price.split('-');
                var minPrice = parseInt(priceRange[0]);
                var maxPrice = parseInt(priceRange[1]);

                if ((color === '' || productColor === color) &&
                    (size === '' || productSize === size) &&
                    (price === '' || (productPrice >= minPrice && productPrice <= maxPrice))) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        function sortProducts() {
            var sortValue = document.getElementById('sortFilter').value;
            var productList = document.getElementById('productList');
            var products = Array.from(productList.getElementsByClassName('product-item'));

            products.sort(function(a, b) {
                var priceA = parseInt(a.getAttribute('data-price'));
                var priceB = parseInt(b.getAttribute('data-price'));

                if (sortValue === 'price-asc') {
                    return priceA - priceB;
                } else if (sortValue === 'price-desc') {
                    return priceB - priceA;
                } else {
                    return 0;
                }
            });

            products.forEach(function(product) {
                productList.appendChild(product);
            });
        }

