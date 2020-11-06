import {
    GraphQLString,
} from 'graphql';

import IGetDeviceByIdPort from '../../../../../ports/input/devices/IGetDeviceByIdPort';

import DeviceType  from '../../type/device.type';

import GraphQLField  from '../../interface.field';


export class GetDeviceQuery implements GraphQLField {

    constructor(private getDeviceByIdUseCase: IGetDeviceByIdPort){}
    
    public type = DeviceType;
    public description: "retireve a Device with id";
    
    public args = {
        deviceId:{
            type: GraphQLString
        }
    }
  

    public resolve = async (root,args) => {
        return  await this.getDeviceByIdUseCase.getDeviceById(args.deviceId)

    }    

    

}