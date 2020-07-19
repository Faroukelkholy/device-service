import config from './config';
import restServer from './adapters/rest'
import DomainUseCases from './domain';
import DatabaseAdapter from './adapters/database';


const main = async () => {
    // const databaseAdapter = await DatabaseAdapter.getInstance()
    // const domainUseCases = new DomainUseCases(databaseAdapter.adapter)
    restServer.startServer(config.HTTP_PORT);
    restServer.initControllers();
}

main();
