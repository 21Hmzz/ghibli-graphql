import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TrackAPI } from "./TrackAPI";
const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#FFA500',
    '#800080',
    '#FFC0CB',
    '#000000',
];
const typeDefs = `#graphql
  type Doctor {
    name: String
    speciality: SPECIALITY
  }
  
  type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
}
type Author {
  id: ID!
  name: String!
  photo: String
}
  type Query {
     doctors(specialities: [SPECIALITY!]): [Doctor]
     add(num1: Float!, num2: Float!): Float
     subtract(num1: Float!, num2: Float!): Float
     multiply(num1: Float!, num2: Float!): Float
     divide(num1: Float!, num2: Float!): Float
     closestColor(hex: String!): String
  }
 
  enum SPECIALITY {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;
const doctorsData = [
    {
        name: 'Samia Mekame',
        speciality: 'OPHTALMOLOGIST',
    },
    {
        name: 'Catherine Bedoy',
        speciality: 'PSYCHOLOGIST',
    },
];
const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            if (args.specialities) {
                return doctorsData.filter((doctor) => args.specialities.includes(doctor.speciality));
            }
            return doctorsData;
        },
        add: (parent, args, context, info) => {
            if (args.num1 && args.num2) {
                if (isNaN(args.num1) || isNaN(args.num2)) {
                    throw new Error('num1 and num2 must be numbers');
                }
                return args.num1 + args.num2;
            }
        },
        subtract: (parent, args, context, info) => {
            if (isNaN(args.num1) || isNaN(args.num2)) {
                throw new Error('num1 and num2 must be numbers');
            }
            if (args.num1 && args.num2) {
                return args.num1 - args.num2;
            }
        },
        multiply: (parent, args, context, info) => {
            if (isNaN(args.num1) || isNaN(args.num2)) {
                throw new Error('num1 and num2 must be numbers');
            }
            if (args.num1 && args.num2) {
                return args.num1 * args.num2;
            }
        },
        divide: (parent, args, context, info) => {
            if (isNaN(args.num1) || isNaN(args.num2)) {
                throw new Error('num1 and num2 must be numbers');
            }
            if (args.num2 === 0) {
                throw new Error('num2 must not be 0');
            }
            if (args.num1 && args.num2) {
                return args.num1 / args.num2;
            }
        },
        closestColor: (parent, args, context, info) => {
            //Couleur la plus proche ???
        }
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
        const cache = server.cache;
        return {
            dataSources: {
                trackAPI: new TrackAPI({ cache })
            }
        };
    }
});
console.log(`🚀  Server ready at: ${url}`);
