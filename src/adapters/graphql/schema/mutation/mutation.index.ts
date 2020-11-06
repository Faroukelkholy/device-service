import IDomainUseCasesPort from "../../../../ports/input/IDomainUseCasesPort";
import { CreateDeviceMutation } from "./device/createDevice.mutation";

export default class Mutation {

    public name = "mutation";
    public description = "mutation exposed by the server";
    
    constructor(private domainUseCases:IDomainUseCasesPort){}

    public fields =  ()=> {

        return {
            createDevice: new CreateDeviceMutation(this.domainUseCases.deviceUseCases.createDeviceUseCase)
        }

    }

}