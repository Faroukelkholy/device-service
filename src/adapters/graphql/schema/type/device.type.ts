import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

class Device {

    public name = "Device";
    public description = "This represent an Device type";

    public fields = function () {

        return {

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
        }

    }
}

export default new GraphQLObjectType(new Device());

export const device = new Device()
