import express from 'express';
import pingFactory from '../controllers/ping'

export default class expressServer {

    private app: express
    constructor() {
        this.app = express()
    }

    public startServer(port): void {
        console.log("server is starting on port:",port);
        this.app.listen(Number(port));
    }

    public initControllers(): void {
        const pingController = pingFactory();
        this.app.get('/ping',pingController);
    }

}