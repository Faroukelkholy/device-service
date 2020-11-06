import {
    GraphQLString,
    GraphQLInputObjectType,
  } from 'graphql';
  const CreateDeviceInputType = new GraphQLInputObjectType({
    name: 'CreateDeviceInput',
    description: 'Input payload for creating Device',
    fields: () => ({
        deviceId: {
            type: GraphQLString
            // type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLString
        },
        firmwareVersion: {
            type: GraphQLString
        },
        firmwareRevision: {
            type: GraphQLString
        }
    }),
  });
  export default CreateDeviceInputType;