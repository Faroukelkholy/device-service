import Device from '../../../domain/entity/device';
export default interface IDeviceRepository {
    getDevices(): Promise<Device[]>
    getDeviceById(deviceId: string): Promise<Device>
    createDevice(device: Device): Promise<Device>
}