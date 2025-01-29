import express from 'express';

const app = express();

//configuracion del puerto
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json()); //permite procesar cuerpos de solicitudes
app.use(morgan('dev')); //muestra peticiones en el servidor

// escuchas al servidor 
app.listen(PORT, () => {
  console.log(`Servido corriendo en el puerto ${PORT}`);
});