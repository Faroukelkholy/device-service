


import DeviceType, {device}  from '../../types/device.type';

import GraphQLField  from '../../interface.field';
import ICreateDevicePort from '../../../../../ports/input/devices/ICreateDevicePort';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import CreateDeviceInputType from './device.input';


export class CreateDeviceMutation implements GraphQLField {

    constructor(private getDeviceByIdUseCase: ICreateDevicePort){}
    
    public type = DeviceType;
    public description: "create a Device";

    public args = {
        device:{
            type:CreateDeviceInputType
        }
    } 


    public resolve = async (root,args) => {
        return  await this.getDeviceByIdUseCase.createDevice(args.device)

    }    

}