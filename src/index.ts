import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {resolvers} from '../src/graphql/Resolvers.js'
import {typeDefs} from '../src/graphql/Schema.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
// addUsers(9,"ff3","ff@gmail","1234")
  const { url }: { url: string } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);