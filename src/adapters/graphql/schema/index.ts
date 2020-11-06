
import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';
import IDomainUseCasesPort from '../../../ports/input/IDomainUseCasesPort';
import Mutation from './mutation/mutation.index';
import Query from './query/query.index';


export default function GqlSchemaFactory(domainUseCases:IDomainUseCasesPort){
    return new GraphQLSchema({

        query: new GraphQLObjectType(new Query(domainUseCases)),
    
        mutation: new GraphQLObjectType(new Mutation(domainUseCases))
    
    });
}

