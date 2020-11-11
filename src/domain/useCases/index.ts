import IDomainUseCasesPort from "../../ports/input/IDomainUseCasesPort";
import IDatabasePort from "../../ports/output/database/IDatabasePort";
import IDeviceUseCasesPort from "../../ports/input/devices/IDeviceUseCasesPort";
import GetDevicesUseCase from "./device/getDevices";
import GetDeviceByIdUseCase from "./device/getDeviceById";
import CreateDeviceUseCase from "./device/createDevice";

export default class DomainUseCases implements IDomainUseCasesPort {

    constructor(private databasePort: IDatabasePort) {

    }

    public deviceUseCases: IDeviceUseCasesPort = {
        getDevicesUseCase: new GetDevicesUseCase(this.databasePort.DeviceRepoitory),
        getDeviceByIdUseCase: new GetDeviceByIdUseCase(this.databasePort.DeviceRepoitory),
        createDeviceUseCase: new CreateDeviceUseCase(this.databasePort.DeviceRepoitory),
    }
}
