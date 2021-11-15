import connectDB from './db/db';
import {UserModel} from './models/user';
import { Enum_UserStatus,Enum_UserRole,Enum_ObjectiveType } from './models/enums';
import { ProjectModel } from './models/project';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';
// import express from 'express';
// import cors from 'cors';
// import { ApolloServer } from 'apollo-server-express';
// import dotenv from 'dotenv';
// import conectarBD from './db/db';
// import { typeDefs } from './graphql/types';
// import { resolvers } from './graphql/resolvers';

// dotenv.config();

// const server = new ApolloServer({
//   typeDefs: typeDefs,
//   resolvers: resolvers,
// });

// const app = express();

// app.use(express.json());

// app.use(cors());

// app.listen({ port: process.env.PORT || 4000 }, async () => {
//   await conectarBD();
//   await server.start();

//   server.applyMiddleware({ app });

//   console.log('servidor listo');
// });
const crearProyectoConObjetivos3 = async () => {

  const usuario1 = await UserModel.create({
    name: 'Sebastian Alejandro',
    lastName: 'Rueda Pinzón',
    email: 'SebastianAlejandro@alunek.com',
    document: '012',
    role: Enum_UserRole.lider,
    status: Enum_UserStatus.autorizado,
  });
  const usuario2 = await UserModel.create({
    name: 'Mauricio',
    lastName: 'Gómez Henao',
    email: 'Mauricio@alunek.com',
    document: '113',
    role: Enum_UserRole.estudiante,
    status: Enum_UserStatus.pendiente,
  });

  const usuario3 = await UserModel.create({
    name: 'Luis',
    lastName: 'Molina',
    email: 'luis@alunek.com',
    document: '213',
    role: Enum_UserRole.estudiante,
    status: Enum_UserStatus.no_autorizado,
  });

  const usuario4 = await UserModel.create({
    name: 'Kevin Andrés',
    lastName: 'Garzón Mijares',
    email: 'KevinAndres@alunek.com',
    document: '313',
    role: Enum_UserRole.estudiante,
    status: Enum_UserStatus.pendiente,
  });

  const usuario5 = await UserModel.create({
    name: 'Nelson Felipe',
    lastName: 'Bermúdez Flechas',
    email: 'NelsonFelipe@alunek.com',
    document: '413',
    role: Enum_UserRole.administrador,
    status: Enum_UserStatus.autorizado,
  });
 const proyectoCreado = await ProjectModel.create({
    name: 'Proyecto Sprint 2',
    startDate: new Date('2021/11/15'),
    finishDate: new Date('2021/12/18'),
    budget: 10000,
    leader: usuario1._id,
    objetivos: [
      { descripcion: 'Este es el objetivo general', tipo: Enum_ObjectiveType.general },
      { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_ObjectiveType.especifico },
      { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_ObjectiveType.especifico },
    ],
  });
  console.log('proyecto creado', proyectoCreado)
};

// HU_003 podré ingresar los datos que deseo actualizar
// await UserModel.findOneAndUpdate({name: 'Luis Fernando'},{
//   email: 'LuisFernando@alunek.com',
//   lastName: 'Mol G.'
// }
// ).then((u)=>{
//   console.log('usuario actualizado',u)
// })
// .catch((e)=>{
//   console.error('Error actualizado', e)
// })

// HU_004 podré ver la información de los usuarios registrados en la plataforma

// await UserModel.find()
// .then((U)=> {
//     console.log('Usuarios', U);
//   })
//   .catch((e)=> {
//    console.error('Error obteniendo los proyectos', e);
//  })

// Listar proyectos
// await ProjectModel.find()
// .then((P)=> {
//     console.log('proyectos', P);
//   })
//   .catch((e)=> {
//    console.error('Error obteniendo los proyectos', e);
//  })




// const consultaProyectoConObjetivos3 = async () => {
//   const proyectoCreado = await ProjectModel.find({ id: '618d5b22e4e2a99bddab693e' });
//   console.log('proyecto', proyectoCreado);
// };

// const proyectoCreado = await ProjectModel.find({name:'Proyecto Sprint 2'}).populate('leader');
// console.log('el proyecto es: ', proyectoCreado)


// ProjectModel.findOne({ _id: '6187d906541df1983cd78518' })
//   .populate('leader')
//   .then((p) => {
//     console.log(p);
//   });

const main = async () => {
  await connectDB();
 
await UserModel.find()
.then((U)=> {
    console.log('Usuarios', U);
  })
  .catch((e)=> {
   console.error('Error obteniendo los proyectos', e);
 })



  // order = await Order.find({ customer_id: '6186629a2dde6bb7f645aeaf' });
  // console.log(order);

  //Obtener usuario
//   await UserModel.find({email:'dsl1@c.com'})
// .then((u)=> {
//     console.log('usuario', u);
//   })
//   .catch((e)=> {
//    console.error('Error obteniendo los usuarios', e);
//  })

//Editar
// await UserModel.findOneAndUpdate({email: 'dsl1@c.com'},{
//   name: 'Juan',
//   lastName: 'Lopez'
// }
// ).then((u)=>{
//   console.log('usuario actualizado',u)
// })
// .catch((e)=>{
//   console.error('Error actualizado', e)
// })

//Eliminar 
// await UserModel.findOneAndDelete({email: 'dsl1@c.com'})
// .then((u)=>{
//   console.log('usuario actualizado',u)
// })
// .catch((e)=>{
//   console.error('Error actualizado', e)
// })

//Eliminar 
// await UserModel.findOneAndDelete({email: 'dsl1@c.com'})
// .then((u)=>{
//   console.log('usuario actualizado',u)
// })
// .catch((e)=>{
//   console.error('Error actualizado', e)
// })

//Obtener un usuario
// await UserModel.findOne({identificacion: '16546'})
// .then((u) =>{
//   console.log('usuario encontrado', u);
// }).catch((e)=>{
//   console.error(e);
// })
};

main();