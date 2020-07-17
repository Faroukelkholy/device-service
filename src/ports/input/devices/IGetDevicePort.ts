import Device from '../../../domain/entity/device';
export interface IGetDevicePort {
    getDevice(id: string): Device
}