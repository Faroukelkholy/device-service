import MongoDriver from './mongoDriver'
import config from '../../../config';
import DeviceRepo from './deviceRepository'
import Device from '../../../domain/entity/device';

const main = async () => {
    // const MongoDriverAdapter = new MongoDriver(config.DB_HOST, config.DB_PORT, config.DB_NAME); //TODO
    const MongoDriverAdapter = new MongoDriver('172.17.0.2', '27017', 'kanunu'); 
    await MongoDriverAdapter.InitAdapter();
    const deviceRepo = new DeviceRepo();
    const device:Device = {name:'test',firmwareRevision:'0.2.0',firmwareVersion:'1.0.0'}
    await deviceRepo.createDevice(device);
    const devices = await deviceRepo.getDevices();
    console.log('seeeder devices :', devices);
};

main();