import express from 'express';
import DomainUseCasesSingleton from '../../../../domain';
import IDeviceUseCasesPort from '../../../../ports/input/devices/IDeviceUseCasesPort';
import getDevicesFactory from './getDevices';
// import DomainUseCases from '../../../../domain/index';
export default class DeviceControllers {

    private deviceUseCases: IDeviceUseCasesPort;
    constructor(private app: express) {
       
    }

    public async control() {
         const domainUseCasesInstance = await DomainUseCasesSingleton.getInstance()
         this.deviceUseCases = domainUseCasesInstance.DomainUseCases.deviceUseCases
        const getDevicesController = getDevicesFactory(this.deviceUseCases.getDevicesUseCase)
        this.app.get('/devices', getDevicesController)
    }

}