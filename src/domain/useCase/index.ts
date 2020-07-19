import IDomainUseCasesPort from "../../ports/input/IDomainUseCasesPort";
import IDatabasePort from "../../ports/output/database/IDatabasePort";
import IDeviceUseCasesPort from "../../ports/input/devices/IDeviceUseCasesPort";
import GetDevicesUseCase from "../useCase/getDevices";
import getDeviceByIdUseCase from "./getDeviceById";

export default class DomainUseCases implements IDomainUseCasesPort {

    constructor(private databasePort: IDatabasePort) { 

    }

    public deviceUseCases: IDeviceUseCasesPort = {
        getDevicesUseCase: new GetDevicesUseCase(this.databasePort.DeviceRepoitory),
        getDeviceByIdUseCase: new getDeviceByIdUseCase(this.databasePort.DeviceRepoitory)
    }
}