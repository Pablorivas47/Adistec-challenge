import { cartFunction } from "../js/cart.js";

const API_URL = 'http://localhost:3001/api/products';

class Producto {
    // El constructor recibe los datos del producto
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    // Método para renderizar el producto en HTML
    renderProducto() {
        return `
            <div class="product-card">
                <img src="${this.image}" alt="${this.name}">
                <h2 class="product-name">${this.name}</h2>
                <p class="product-price">${this.price}</p>
                <p class="product-description">${this.description}</p>
                <div class="container-cart">
                    <button id="${this.id}" class="add-to-cart">Agregar al carrito</button>
                </div>
            </div>
        `;
    }
}

const data = async () => {
    const $container = document.getElementById('product-conntainer'); // Obtener el contenedor donde se insertarán los productos

    try {
        const response = await fetch(API_URL);  // Realizar la solicitud para obtener los productos
        const products = await response.json();  // Convertir la respuesta en JSON

        // Crear los productos con la clase Producto y renderizarlos
        let productsHTML = '';
        products.forEach((productData) => {
            const product = new Producto(
                productData._id, 
                productData.name, 
                productData.price, 
                productData.description, 
                productData.image
            );
            productsHTML += product.renderProducto(); // Agregar el HTML de cada producto
        });

        // Insertar todo el HTML generado en el contenedor
        $container.innerHTML = productsHTML;
        cartFunction();
    } catch (error) {
        console.error('Error al obtener los productos', error);  // Manejo de errores
    }
};

data(); // Llamar a la función para cargar los productos
