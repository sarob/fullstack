const express = require('express');
     const { ApolloServer } = require('apollo-server-express');

     const app = express();
     const port = 3000;

     // Define your Apollo Server and Nexus schema here

     async function startApolloServer() {
       const server = new ApolloServer({ /* Your Nexus schema */ });
       await server.start();
       server.applyMiddleware({ app });

       app.listen(port, () => {
         console.log(`Server listening on port ${port}`);
       });
     }

     startApolloServer();