import mongoose from 'mongoose';

//conexion a la base de datos
const connectDB = async () => {
  try {
    (await mongoose.connect(process.env.uri));
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar la Base de datos');
  }
};

export default connectDB;