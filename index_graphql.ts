import express from "express";
import cors from "cors";
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import connectDB from "./db/db";
import {typeDefs} from './graphql/types';
import {resolvers} from './graphql/resolvers';

// dotenv.config(); Para usar variabales de entorno en toda la aplicacion
dotenv.config(); 

const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers,
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen({port: process.env.PORT || 4000}, async()=>{
    await connectDB();
    await server.start();

    server.applyMiddleware({app});
    console.log
});