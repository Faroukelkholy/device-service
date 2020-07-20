import Device from '../../../domain/entity/device';
export default interface IGetDeviceByIdPort {
    getDeviceById(deviceId: string): Promise<Device>
}