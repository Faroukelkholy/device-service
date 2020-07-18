import config from '../../config';
import MongoDriver from './mongo/mongoDriver'
export default class DatabaseAdapter {
    private static instance: DatabaseAdapter;
    // public adapter: IDatabasePort; //TODO
    public adapter: any;


    private constructor() { }

    public static async getInstance(): Promise<DatabaseAdapter> {
        if (!DatabaseAdapter.instance) {
            DatabaseAdapter.instance = new DatabaseAdapter();
            DatabaseAdapter.instance.adapter = new MongoDriver(config.DB_HOST, config.DB_PORT, config.DB_NAME);
            await DatabaseAdapter.instance.adapter.InitAdapter();
        }
        return DatabaseAdapter.instance;
    }
}
