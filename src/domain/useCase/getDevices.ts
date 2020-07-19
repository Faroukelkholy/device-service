import IGetDevicesPort from '../../ports/input/devices/IGetDevicesPort';
import Device from '../entity/device';
import IDeviceRepository from '../../ports/output/database/IDeviceRepository'


export default class GetDevicesUseCase implements IGetDevicesPort {

    constructor(private deviceRepository: IDeviceRepository) {
    }

    public async getDevices(): Promise<Device[]> {
        try {
            return await this.deviceRepository.getDevices();
        } catch (err) {
            return Promise.reject(err)
        }
    }

}
