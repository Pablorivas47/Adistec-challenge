import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ProductRoutes from './src/routes/Product-routes.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

const app = express();

dotenv.config();

//middleware
app.use(express.json()); //permite procesar cuerpos de solicitudes
app.use(morgan('dev')); //muestra peticiones en el servidor

//base de datos
connectDB();

// const origensPermitidos = ['http://localhost:5500', 'http://localhost:3000'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || origensPermitidos.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido por CORS'));
//     }
//   },
// };

app.use(cors());

//configuracion del puerto
const PORT = process.env.PORT || 5000;

//rutas
app.use('/api/products', ProductRoutes);


// escuchas al servidor 
app.listen(PORT, () => {
  console.log(`Servido corriendo en el puerto ${PORT}`);
});