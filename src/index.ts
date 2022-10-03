import { ApolloServer } from "apollo-server";
import { Context, context } from "./context";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


const typeDefs = `
type Query {
    allMaterials: [Material]!
    disciplineById(id: Int!): Discipline
}

type Material {
    id: Int!
    name: String!
    quantity: Int!
    educationalUnity: EducationalUnity
    disciplines: [Discipline!]!
}

type Class {
    id: Int!
    studentsQuantity: Int!
    educationalUnities: [EducationalUnity!]!
    student: Student
}

type Teacher {
    id: Int!
    name: String!
    disciplines: [Discipline!]!
}

type EducationalUnity {
    id: Int!
    name: String!
    class: Class
    materials: [Material!]!
}

type Student {
    id: Int!
    name: String!
    classes: [Class!]!
}

type Discipline {
    id: Int!
    name: String!
    material: Material
    teacher: Teacher
}`;

const resolvers = {
    Query: {
        allMaterials: (_parent, _args, context: Context) => {
            return context.prisma.material.findMany();
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen({port: 4000}, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`) 
);
