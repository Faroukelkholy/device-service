import config from './config';
import restServer from './adapters/rest'



const main = async () => {
    restServer.startServer(config.HTTP_PORT);
}

main();
