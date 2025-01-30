
export const addToCartHandler = () => {

    // Selecciona todos los botones de agregar al carrito y el contador del carrito
    const $addToCartButton = document.querySelectorAll('.add-to-cart');
    const $cartCount = document.getElementById('cart-counter');

    // Obtiene el carrito desde el localStorage o inicializa un array vacío si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para actualizar el contador de productos en el carrito
    const updateCartCount = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        $cartCount.textContent = totalItems;
    };

    // Función para agregar un producto al carrito
    const addToCart = (productId, productName, productPrice) => {
       
        const existingProduct = cart.find((item) => item.productId === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            const newProduct = {
                productId: productId,
                name: productName,
                price: productPrice,
                quantity: 1,
            };
            cart.push(newProduct);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    // Añade un evento a cada botón de "Agregar al carrito"
    $addToCartButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productId = e.target.id;
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = parseFloat(
                productCard.querySelector('.product-price').textContent.replace('$', '')
            );
            addToCart(productId, productName, productPrice);
        });
    });

    updateCartCount();
};
