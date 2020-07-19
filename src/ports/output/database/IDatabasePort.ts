import  IDeviceRepository  from "./IDeviceRepository";

export default interface IDatabasePort {
    InitAdapter(): Promise<void>;
    DeviceRepoitory: IDeviceRepository;
}