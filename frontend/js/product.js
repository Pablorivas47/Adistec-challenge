const API_URL = 'http://localhost:3001/api/products';

const data = async () => {
    const $container = document.getElementById('product-conntainer');

    try {
        const response = await fetch(API_URL);
        const products = await response.json();  // Añadir 'await' aquí

        // Si products es un arreglo, puedes usar map
        let productsHTML = '';
        products.forEach((product) => {
            productsHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h2 class="product-name">${product.name}</h2>
                    <p class="product-price">${product.price}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="container-cart">
                        <button id="${product._id}" class="add-to-cart">Agregar al carrito</button>
                    </div>
                </div>`;
        });
        // Insertar todo el HTML de los productos
        $container.innerHTML = productsHTML;


    } catch (error) {
        console.error('error al obtener los productos', error);
    }
};

data();
