import Device from '../../../domain/entity/device';
export default interface IGetDeviceByIdPort {
    getDeviceById(id: string): Promise<Device>
}