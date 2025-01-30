import { Schema, model } from 'mongoose';

// Modelo para la colección de la base de datos
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true } 
});

export default model('Product', productSchema);