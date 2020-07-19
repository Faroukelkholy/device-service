import Device from '../../../domain/entity/device';
export default interface IDeviceRepository {
    getDevices(): Promise<Device[]>
    getDeviceById(id: string): Promise<Device>
    createDevice(device: Device): Promise<Device>
}