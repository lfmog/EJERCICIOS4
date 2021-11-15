const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = [
        {
          name: 'Daniel',
        },
        {
          name: 'Juan',
        },
        {
          name: 'Pedro',
        },
      ];

      return usuarios;
    },
  },
};

export { resolvers };
