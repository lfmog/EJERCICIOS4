import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(process.env.DATABASE_URL)

    // 'mongodb+srv://admin:adminProyectos@gestionproyectosmisiont.vobsf.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    // 'mongodb+srv://admin:admin@testmongoose.k0loc.mongodb.net/mongoose-test?retryWrites=true&w=majority'
  .then(()=>{
    console.log("conexion exitosa");
    })
    .catch((e)=>{
      console.error("Error al conectarse a la bd", e);
    });
};

export default connectDB;
