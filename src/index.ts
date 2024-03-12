import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GhibliAPI} from "./ghibli-api.ts";
import {readFileSync} from 'fs'
import {getUser} from "./modules/auth.ts";

const resolvers = {
    Query: {
        movie: async (_, {id}, {dataSources}) => {
            return dataSources.ghilbiAPI.getMovie(id);
        },
        allMovies: async (_, __, {dataSources}) => {
            return dataSources.ghilbiAPI.allMovies();
        },
        allPeople: async (_, __, {dataSources}) => {
            return dataSources.ghilbiAPI.getPeoples();
        },
        person: async (_, {id}, {dataSources}) => {
            return dataSources.ghilbiAPI.getPerson(id);
        },
        allSpecies: async (_, __, {dataSources}) => {
            return dataSources.ghilbiAPI.getAllSpecies();
        },
        species: async (_, {id}, {dataSources}) => {
            return dataSources.ghilbiAPI.getSpecies(id);
        },
        allLocations: async (_, __, {dataSources}) => {
            return dataSources.ghilbiAPI.getLocations();
        },
        location: async (_, {id}, {dataSources}) => {
            return dataSources.ghilbiAPI.getLocation(id);
        },
        allVehicles: async (_, __, {dataSources}) => {
            return dataSources.ghilbiAPI.getVehicles();
        },
        vehicle: async (_, {id}, {dataSources}) => {
            return dataSources.ghilbiAPI.getVehicle(id);
        }

    }
};

const typeDefs = readFileSync('src/schema.gql', 'utf-8')

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
    context: async ({req}) => {
        const authorization = (req.headers.authorization)?.split('Bearer ')?.[1]
        const user = authorization ? getUser(authorization) : null;
        const cache = server.cache
        return {
            dataSources: {
                ghilbiAPI: new GhibliAPI({cache})
            },
            user
        }
    }
});

console.log(`🚀  Server ready at: ${url}`);

