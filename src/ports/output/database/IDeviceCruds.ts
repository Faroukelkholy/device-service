import Device from '../../../domain/entity/device';
export interface IDeviceCruds {
    getDevices(): Device[]
    getDevice(id: string): Device
    createDevice(device: Device): void
}