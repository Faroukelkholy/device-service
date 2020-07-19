import Device from '../../../domain/entity/device';
export default interface IGetDevicePort {
    getDeviceById(id: string): Device
}