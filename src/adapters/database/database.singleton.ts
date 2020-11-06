import IDatabasePort from '../../ports/output/database/IDatabasePort';
import MongoDriver from './mongo/mongo_Driver'
export default class DatabaseSingleton {
    private static instance: DatabaseSingleton;
    public adapter: IDatabasePort;


    private constructor() { }

    public static async getInstance(): Promise<DatabaseSingleton> {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
            DatabaseSingleton.instance.adapter = new MongoDriver(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME);
            await DatabaseSingleton.instance.adapter.InitAdapter();
        }
        return DatabaseSingleton.instance;
    }
}
