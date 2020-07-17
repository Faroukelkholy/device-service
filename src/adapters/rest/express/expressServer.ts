import express from 'express';
import pingFactory from '../controllers/ping'

export default class expressServer {

    private app: express
    constructor() {
        this.app = express()
    }

    public startServer(port): void {
        this.app.listen(Number(port));
    }

    public initControllers(): void {
        const pingController = pingFactory();
        this.app.get('/ping',pingController);
    }

}