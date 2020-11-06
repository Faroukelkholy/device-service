
import IDomainUseCasesPort from '../../../../ports/input/IDomainUseCasesPort';
import { GetDeviceQuery } from './device/getDevice.query';
import { GetDevicesQuery } from './device/getDevices.query';

export default class Query {
        
    public name = "Query";
    public description = "queries exposed by the server";

    constructor(private domainUseCases:IDomainUseCasesPort){}

    public fields =  () => {

        return {
            devices: new GetDevicesQuery(this.domainUseCases.deviceUseCases.getDevicesUseCase),
            device: new GetDeviceQuery(this.domainUseCases.deviceUseCases.getDeviceByIdUseCase)
            
        }

    }

}


