import IGetDevicesPort from './IGetDevicesPort';
import IGetDeviceByPort from "./IGetDeviceByIdPort";
// import ICreateDevicePort from './ICreateDevicePort';

export default interface IDeviceUseCasesPort {
    getDevicesUseCase : IGetDevicesPort
    getDeviceByIdUseCase: IGetDeviceByPort
    // createDevice: ICreateDevicePort
}