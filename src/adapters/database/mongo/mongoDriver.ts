import IDatabasePort from '../../../ports/output/database/IDatabasePort';
import IDeviceRepoitory from '../../../ports/output/database/IDeviceRepoitory';
import DeviceRepository from './deviceRepository'
const mongoose = require('mongoose');


export default class MongoDriver implements IDatabasePort {

    public DeviceRepoitory: IDeviceRepoitory

    constructor(private dbHost: string, private dbPort: string, private dbName: string) { 
        this.DeviceRepoitory = new DeviceRepository();
    }

    public async InitAdapter(): Promise<void> {
        this._debug();
        await this.connect({ dbHost: this.dbHost, dbPort: this.dbPort, dbName: this.dbName });
    }

    private async connect(mongoSettings):Promise<any> {
        console.log(`creating Connection to [ mongodb://${mongoSettings.dbHost}:${mongoSettings.dbPort}/${mongoSettings.dbName} ]`);
        mongoose.set('useUnifiedTopology', true);
        return mongoose.connect(`mongodb://${mongoSettings.dbHost}:${mongoSettings.dbPort}/${mongoSettings.dbName}`, { useNewUrlParser: true });
    }

    private _debug() {
        if (process.env.DEBUG) {
            mongoose.set('debug', function (coll, method, query, doc, options) {
                console.log(` Mongoose collection: ${coll.toString()} --method: ${method.toString()} --query: ${Object.values(query)} `);
            });
        }
    }

}

