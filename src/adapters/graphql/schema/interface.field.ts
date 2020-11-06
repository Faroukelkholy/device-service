import {
    GraphQLType,
} from 'graphql';


export default interface GraphQLField { //GraphQLObjectTypeConfig && GraphQLFieldConfig
    type: GraphQLType;
    description?: string;
    resolve: Function;
}