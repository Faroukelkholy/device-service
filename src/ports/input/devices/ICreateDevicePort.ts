import Device from '../../../domain/entity/device';
export interface ICreateDevicePort {
    createDevice(device: Device): void
}