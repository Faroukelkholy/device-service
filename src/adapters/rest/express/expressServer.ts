import express from 'express';
import pingFactory from '../controllers/ping'
import DeviceControllers from '../controllers/device/device';
import IDomainUseCasesPort  from '../../../ports/input/IDomainUseCasesPort';


export default class expressServer {

    public app: express
    constructor() {
        this.app = express()
    }

    public startServer(port): void {
        console.log("server is starting on port:", port);
        this.app.listen(Number(port));
    }
    public initControllers(): void {
    // public initControllers(domainUseCases:IDomainUseCasesPort): void {
        // const deviceControllers = new DeviceControllers(this.app,domainUseCases.deviceUseCases)
        const deviceControllers = new DeviceControllers(this.app)
        deviceControllers.control();
        const pingController = pingFactory();
        this.app.get('/ping', pingController);
    }

}