import IDeviceRepository from '../../../ports/output/database/IDeviceRepository';
import Device from '../../../domain/entity/device';
import DeviceModel from '../models/device';

export default class DeviceRepository implements IDeviceRepository {

    constructor() { }


    async getDevices(): Promise<Device[]> {
        const Devices: Device[] = await DeviceModel.find({},{_id:0});
        return Devices;
    }

    async getDeviceById(deviceID: string): Promise<Device> {
        const device: Device = await DeviceModel.find({ deviceId: deviceID },{_id:0});
        return device[0];
    }

    async createDevice(device: Device): Promise<Device> {
        const deviceDoc = new DeviceModel(device);
        return await deviceDoc.save();
    }

    async deleteAllDevices() {
        await DeviceModel.deleteMany();
    }


}