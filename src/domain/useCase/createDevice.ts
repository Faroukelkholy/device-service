import ICreateDevicePort from '../../ports/input/devices/ICreateDevicePort';
import Device from '../entity/device';
import IDeviceRepository from '../../ports/output/database/IDeviceRepository'


export default class CreateDeviceUseCase implements ICreateDevicePort {

    constructor(private deviceRepository: IDeviceRepository) {
    }

    public async createDevice(device: Device): Promise<Device> {
        try {
            return await this.deviceRepository.createDevice(device);
        } catch (err) {
            return Promise.reject(err)
        }
    }

}
