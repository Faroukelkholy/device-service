import IDeviceRepository from '../../../ports/output/database/IDeviceRepository';
import Device from '../../../domain/entity/device';
import DeviceModel from '../models/device';

export default class DeviceRepository implements IDeviceRepository {

    constructor() { }


    async getDevices(): Promise<Device[]> {
        const Devices: Device[] = await DeviceModel.find({});
        return Devices;
    }

    async getDeviceById(id: string): Promise<Device> {
        const device: Device = await DeviceModel.find({ _id: id });
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