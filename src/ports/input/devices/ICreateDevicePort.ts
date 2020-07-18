import Device from '../../../domain/entity/device';
export default interface ICreateDevicePort {
    createDevice(device: Device): void
}