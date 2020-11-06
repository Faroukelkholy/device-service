import {
    GraphQLList, GraphQLObjectTypeConfig
} from 'graphql';
import IGetDevicesPort from '../../../../../ports/input/devices/IGetDevicesPort';

import DeviceType  from '../../type/device.type';

import GraphQLField  from '../../interface.field';


export class GetDevicesQuery implements GraphQLField

{

    constructor(private getDevicesUseCase: IGetDevicesPort){}
    
    public type = new GraphQLList(DeviceType);

    public description: "List of all Devices";

    public resolve = async () => {
        return await this.getDevicesUseCase.getDevices();
    }    

}