import Device from '../../../domain/entity/device';
export interface IGetDevicesPort {
    getDevices(): Device[]
}