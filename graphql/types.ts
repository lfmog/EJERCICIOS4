import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Usuario {
    name: String!
  }

  type Query {
   Usuarios: [usuario]
  }
`;

export { typeDefs };
