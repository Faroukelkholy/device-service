import Device from '../../../domain/entity/device';
export default interface IGetDevicesPort {
    getDevices(): Device[]
}