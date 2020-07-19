import IDeviceRepository from '../../../ports/output/database/IDeviceRepository';
import Device from '../../../domain/entity/device';
import DeviceModel from '../models/device';

export default class DeviceRepository implements IDeviceRepository {

    // constructor(private db:any){} //TODO
    constructor() { }


    async getDevices(): Promise<Device[]> {
        const Devices: Device[] = await DeviceModel.find({});
        return Devices;
    }

    async getDeviceById(id: string): Promise<Device> {
        const Device: Device = await DeviceModel.find({ _id: id });
        return Device;
    }

    async createDevice(device: Device): Promise<void> {
        const deviceDoc = new DeviceModel(device);
        await deviceDoc.save();
    }

    async deleteAllDevices() {
        await DeviceModel.deleteMany();
    }


}