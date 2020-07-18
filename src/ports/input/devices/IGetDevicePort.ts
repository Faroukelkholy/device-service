import Device from '../../../domain/entity/device';
export default interface IGetDevicePort {
    getDevice(id: string): Device
}