import mongoose from 'mongoose';

//conexion a la base de datos
const connectDB = async () => {
  try {
    (await mongoose.connect(process.env.MONGO_URI));
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar la Base de datos');
  }
};

export default connectDB;