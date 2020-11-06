import express from 'express';
import {graphqlHTTP} from 'express-graphql'
import pingFactory from '../rest/controllers/ping'
import DeviceControllers from '../rest/controllers/device/device';
import { GraphQLSchema } from 'graphql';


export default class ExpressServer { 

    private app: express
    constructor() {
        this.app = express()
        this.initAdapter();
        this.initControllers();
    }

    private initAdapter():void {
        this.app.use(express.json());
    }

    private initControllers(): void {
        const pingController = pingFactory();
        this.app.get('/ping', pingController);
        const deviceControllers = new DeviceControllers(this.app)
  
    }

    public startServer(port: string): void {
        console.log("server is starting on port:", port);
        this.app.listen(Number(port));
    }

    public setupGraphQl(gqlschema:GraphQLSchema):void {
        this.app.use('/graphql',graphqlHTTP({
            schema:gqlschema,
            graphiql: process.env.DEBUG ==='true'
        }))
    }


}