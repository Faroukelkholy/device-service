import express from 'express';
import DomainUseCasesSingleton from '../../../../domain';
import IDeviceUseCasesPort from '../../../../ports/input/devices/IDeviceUseCasesPort';
import createDeviceFactory from './createDevice';
import getDeviceByIdFactory from './getDeviceById';
import getDevicesFactory from './getDevices';

export default class DeviceControllers {

    private deviceUseCases: IDeviceUseCasesPort;
    constructor(private app: express) {

    }

    public async control() {
        const domainUseCasesInstance = await DomainUseCasesSingleton.getInstance()
        this.deviceUseCases = domainUseCasesInstance.DomainUseCases.deviceUseCases

        const getDevicesController = getDevicesFactory(this.deviceUseCases.getDevicesUseCase)
        const getDeviceController = getDeviceByIdFactory(this.deviceUseCases.getDeviceByIdUseCase)
        const createDeviceController = createDeviceFactory(this.deviceUseCases.createDeviceUseCase)
        this.app.get('/devices', getDevicesController)
        this.app.get('/devices/:deviceId', getDeviceController)
        this.app.post('/devices', createDeviceController)
    }

}