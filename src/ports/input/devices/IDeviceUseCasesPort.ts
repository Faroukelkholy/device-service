import IGetDevicesPort from './IGetDevicesPort';
// import IGetDevicePort from "./IGetDevicePort";
// import ICreateDevicePort from './ICreateDevicePort';

export default interface IDeviceUseCasesPort {
    getDevicesUseCase : IGetDevicesPort
    // getDevice: IGetDevicePort
    // createDevice: ICreateDevicePort
}