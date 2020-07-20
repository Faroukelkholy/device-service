import IGetDeviceByIdPort from '../../ports/input/devices/IGetDeviceByIdPort';
import Device from '../entity/device';
import IDeviceRepository from '../../ports/output/database/IDeviceRepository'


export default class getDeviceByIdUseCase implements IGetDeviceByIdPort {

    constructor(private deviceRepository: IDeviceRepository) {
    }

    public async getDeviceById(deviceId: string): Promise<Device> {
        try {
            return await this.deviceRepository.getDeviceById(deviceId)
        } catch (err) {
            return Promise.reject(err)
        }
    }

}
