import Device from '../../../domain/entity/device';
export default interface IDeviceRepoitory {
    getDevices(): Promise<Device[]>
    getDevice(id: string): Promise<Device>
    createDevice(device: Device): void
}