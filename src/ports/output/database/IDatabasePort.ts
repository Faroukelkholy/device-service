import  IDeviceRepoitory  from "./IDeviceRepoitory";

export default interface IDatabasePort {
    InitAdapter(): Promise<void>;
    DeviceRepoitory: IDeviceRepoitory;
}