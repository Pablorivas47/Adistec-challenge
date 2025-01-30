import Product from '../models/Product-model.js';


//Obtener todos los productos de la base de datos
export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        if(!products || products.length === 0) {
            return res.status(404).json({ message: 'no hay productos cargados' });
        }
        return res.json(products);
    } catch (error) {
        console.error('Error en getProduct', error);
        return res.status(500).json({ message: 'Error internos en el servidor' });
    }
};


//Agregar Productos
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    if (!newProduct) {
      return res.status(404).json({ message: 'campos incompletos' });
    }
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//Modificar producto
export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'El producto no existe' });
    }

    return res.status(201).json({ message: 'Producto se modifico correctamente' });
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deleteProduct) {
      return res.status(404).json({ message: 'el producto no existe' });
    }
    return res.status(201).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};