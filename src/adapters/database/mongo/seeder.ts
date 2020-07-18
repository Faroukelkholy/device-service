import MongoDriver from './mongoDriver'
import config from '../../../config';
import DeviceCruds from './deviceRepository'
import Device from '../../../domain/entity/device';

const main = async () => {
    // const MongoDriverAdapter = new MongoDriver(config.DB_HOST, config.DB_PORT, config.DB_NAME);
    const MongoDriverAdapter = new MongoDriver('172.17.0.2', '27017', 'kanunu');
    await MongoDriverAdapter.InitAdapter();
    const deviceCruds = new DeviceCruds();
    const device:Device = {name:'test',firmwareRevision:'rev',firmwareVersion:'version'}
    await deviceCruds.createDevice(device);
    const devices = await deviceCruds.getDevices();
    console.log('seeeder devices :', devices);
};

main();